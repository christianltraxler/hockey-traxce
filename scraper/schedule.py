import json
import requests
import datetime

from pymongo import MongoClient

''' Adds all the active teams to the hockey-traxce -> schedule'''
def addSchedule(db, year=2020):
    # Get the dictionary of the info of all the active teams
    startDate = str(year) + '-09-01'
    endDate = str(year + 1) + '-09-01'
    if year == 2019:
        endDate = str(year + 1) + '-10-01'
    response = requests.get('https://statsapi.web.nhl.com/api/v1/schedule?startDate=' +  startDate +'&endDate=' + endDate)
    schedule = response.json()

    # Iterate through the dates in the schedule
    for date in schedule['dates']:
        # Iterate through the games on the date
        for gameInfo in date['games']:
            if (gameInfo['gameType'] == 'R' or gameInfo['gameType'] == 'P'):
                # Based on the info of the game, generate a dictionary 
                game = {
                    'id': gameInfo['gamePk'],
                    'date': gameInfo['gameDate'],
                    'gameType': gameInfo['gameType'],
                    'season': int(gameInfo['season']),
                    'statusCode': gameInfo['status']['statusCode'],
                    'score': {
                        'away': gameInfo['teams']['away']['score'],
                        'home': gameInfo['teams']['home']['score']
                    },
                    'teams': {
                        'away': {
                            'team': {
                                'id': gameInfo['teams']['away']['team']['id'],
                                'name': gameInfo['teams']['away']['team']['name']
                            },
                            'record': {
                                'wins': gameInfo['teams']['away']['leagueRecord']['wins'],
                                'losses': gameInfo['teams']['away']['leagueRecord']['losses'],
                                'ot': gameInfo['teams']['away']['leagueRecord']['ot'],
                                'points': 2*gameInfo['teams']['away']['leagueRecord']['wins'] + gameInfo['teams']['away']['leagueRecord']['ot'],
                            }
                        },
                        'home': {
                            'team': {
                                'id': gameInfo['teams']['home']['team']['id'],
                                'name': gameInfo['teams']['home']['team']['name']
                            },
                            'record': {
                                'wins': gameInfo['teams']['home']['leagueRecord']['wins'],
                                'losses': gameInfo['teams']['home']['leagueRecord']['losses'],
                                'ot': gameInfo['teams']['home']['leagueRecord']['ot'],
                                'points': 2*gameInfo['teams']['home']['leagueRecord']['wins'] + gameInfo['teams']['home']['leagueRecord']['ot'],
                            }
                        }
                    },
                    'venue': {
                        'name': gameInfo['venue']['name']
                    }
                }

                # Find any existing teams in the database with the same id
                dbGame = db.schedule.find_one({'id': gameInfo['gamePk']})
                # Removed the _id key to compare the new dictionary with the one from the collection
                if (dbGame != None):
                    dbGame.pop('_id')

                # If the new and collection dictionaries are different
                if (dbGame != game):
                    print('Resetting game: ' + str(gameInfo['gamePk']))
                    # Delete the existing info from the collection
                    db.schedule.delete_one({'id': gameInfo['gamePk']})
                    # Add the new info into the collection
                    db.schedule.insert_one(game)
                else:
                    print('Skipping game: ' + str(gameInfo['gamePk']))


