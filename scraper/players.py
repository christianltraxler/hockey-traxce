import json
import requests

from pymongo import MongoClient

import functions

''' Adds all the active skaters to the hockey-traxce -> players'''
def addPlayersInfo(db):
    # Get all the teams from the teams collection
    teams = db.teams.find()

    # Iterate through all the teams
    for team in teams:
        # Get the dictionary of the roster of the team
        teamResponse = requests.get('https://statsapi.web.nhl.com/api/v1/teams/' + str(team['id']) + '?expand=team.roster')
        teamRoster = teamResponse.json()
        teamRoster = teamRoster['teams'][0]

        # Iterate through all the players on the team
        for player in teamRoster['roster']['roster']:
            # Get the dictionary of the player info based on the id
            playerResponse = requests.get('https://statsapi.web.nhl.com/api/v1/people/' + str(player['person']['id']))
            playerInfo = playerResponse.json()
            playerInfo = playerInfo['people'][0]

            # Based on the info of the player, generate a dictionary 
            player = {
                'id': playerInfo['id'],
                'name': {
                    'fullName': playerInfo['fullName'],
                    'firstName': playerInfo['firstName'],
                    'lastName': playerInfo['lastName']
                },
                'jerseyNumber': functions.ifKeyExists(playerInfo, 'primaryNumber'),
                'currentTeam': {
                    'id': team['id'],
                    'name': team['name'],
                    'teamName': team['teamName'],
                    'abbreviation': team['abbreviation']
                },
                'primaryPosition': {
                    'code': playerInfo['primaryPosition']['code'],
                    'name': playerInfo['primaryPosition']['name'],
                    'type': playerInfo['primaryPosition']['type'],
                    'abbreviation': playerInfo['primaryPosition']['abbreviation']
                },
                'stats': getPlayerStats(playerInfo['id']),
                'height':  playerInfo['height'],
                'weight': playerInfo['weight'],
                'shootsCatches': playerInfo['shootsCatches'],
                'picture' : {
                    'link': 'https://assets.nhle.com/mugs/nhl/' + str(2020) + str(2020 + 1) + '/' + team['abbreviation'] + '/' + str(playerInfo['id']) + '.png'
                },
                'rosterStatus' : playerInfo['rosterStatus'],
                "active" : playerInfo['active'],
                'info': {
                    'birthDate': playerInfo['birthDate'],
                    'birthCity': playerInfo['birthCity'],
                    'birthCountry': playerInfo['birthCountry'],
                    'nationality': playerInfo['nationality']
                }
            }

            # Find any existing plauers in the database with the same id
            dbPlayer = db.players.find_one({'id': player['id']})
            # Removed the _id key to compare the new dictionary with the one from the collection
            if (dbPlayer != None):
                dbPlayer.pop('_id')

            # If the new and collection dictionaries are different
            if (dbPlayer != player):
                print('Resetting player: ' + player['name']['fullName'])
                # Delete the existing info from the collection
                db.players.delete_one({'id': player['id']})
                # Add the new info into the collection
                db.players.insert_one(player)
            else:
                print('Skipping player: ' + player['name']['fullName'])


def getPlayerStats(playerId):
    stats = []
    playerStats = requests.get('https://statsapi.web.nhl.com/api/v1/people/' + str(playerId) + '/stats?stats=yearByYear').json()

    for yearStats in playerStats['stats'][0]['splits']:
        stats.append({
            'season': yearStats['season'],
            'stats': yearStats['stat'],
            'team': {
                'id': functions.ifKeyExists(yearStats['team'], 'id'),
                'name': yearStats['team']['name']
            },
            'league': {
                'id': functions.ifKeyExists(yearStats['league'], 'id'),
                'name': yearStats['league']['name']
            }
        })
    return stats