import json
from random import shuffle
from typing import List, TypedDict
from src.sendEmail import send
from uuid import uuid4
from src.services.DyanmoIO import DynamoIO
from src.services.Logging import Logging
from src.services.Response import Response


class People(TypedDict, total=False):
    name: str
    email: str
    target: str


Logger = Logging()
Respond = Response()
DynamoDB = DynamoIO()


def random(event, context):
    Logger.log("Entered randomiser lambda.")
    requestBody = json.loads(event["body"])

    if "people" in requestBody:
        people: List[People] = requestBody["people"]

        if len(people) < 3:
            return Respond.make(500, "Error: Please provide additional names.")

        group = shuffleNames(people)

        for person in group:
            try:
                rowUUID = str(uuid4())
                DynamoDB.putItem(
                    {
                        "UUID": rowUUID,
                        "party_name": requestBody["partyName"],
                        "santa_name": person["name"],
                        "santa_email": person["email"],
                    }
                )
                Logger.log(f"Record created for {person['name']}: {rowUUID}\n")
            except Exception as error:
                Logger.log(f"Error: Failed to create record for {person['name']}\n")
                Logger.log(error)

        Logger.log(f"Success: Secret santa party, {requestBody['partyName']}, created")
        return Respond.make(
            200, {"partyName": requestBody["partyName"], "people": group}
        )

    Logger.log("Exiting randomiser lambda.")
    return Respond.make(500, "Error: Unable to find names in the body request.")


def shuffleNames(people: List[People]):
    shuffle(people)
    for index in range(len(people)):
        if index == (len(people) - 1):
            people[index]["target"] = people[0]["name"]
        else:
            people[index]["target"] = people[index + 1]["name"]
    return people
