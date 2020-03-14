import json
from random import shuffle
from typing import List, TypedDict
from src.sendEmail import send
from uuid import uuid4
from boto3 import client
from src.services.Logging import Logging
from src.services.Response import Response


class People(TypedDict, total=False):
    name: str
    email: str
    target: str


def random(event, context):
    Logging.log("Entered randomiser lambda.")
    requestBody = json.loads(event["body"])
    aws = client("dynamodb", "eu-west-2")

    if "people" in requestBody:
        people: List[People] = requestBody["people"]

        if len(people) < 3:
            return Response.make(500, "Error: Please provide additional names.")

        group = shuffleNames(people)

        for person in group:
            try:
                rowUUID = str(uuid4())
                aws.put_item(
                    TableName="SecretSantaRecords",
                    Item={
                        "UUID": {"S": rowUUID},
                        "party_name": {"S": requestBody["partyName"]},
                        "santa_name": {"S": person["name"]},
                        "santa_email": {"S": person["email"]},
                    },
                )
                Logging.log(f"Record created for {person['name']}: {rowUUID}\n")
            except:
                Logging.log(f"Failed to create record for {person['name']}\n")

        Logging.log("Exiting randomiser lambda.")
        return Response.make(200, True)

    Logging.log("Exiting randomiser lambda.")
    return Response.make(500, "Error: Unable to find names in the body request.")


def shuffleNames(people: List[People]):
    shuffle(people)
    for index in range(len(people)):
        if index == (len(people) - 1):
            people[index]["target"] = people[0]["name"]
        else:
            people[index]["target"] = people[index + 1]["name"]
    return people
