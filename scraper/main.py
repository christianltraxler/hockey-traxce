import json
import requests

from pymongo import MongoClient

import secrets
import players, schedule

if __name__ == "__main__":
    client = MongoClient(secrets.MONGO_LINK)
    db = client["hockey-traxce"]

    #players.addPlayers(db)
    #schedule.addSchedule(db)


