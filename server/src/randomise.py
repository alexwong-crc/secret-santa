import json
from random import shuffle
from typing import List, TypedDict
from src.makeResponse import makeResponse
from src.sendEmail import send
from uuid import uuid4
from boto3 import client


class People(TypedDict, total=False):
    name: str
    email: str
    target: str


def random(event, context):
    requestBody = json.loads(event["body"])
    aws = client("dynamodb", "eu-west-2")

    if "people" in requestBody:
        people: List[People] = requestBody["people"]

        if len(people) < 3:
            return makeResponse(500, "Please provide additional names.")

        group = shuffleNames(people)

        for person in group:
            aws.put_item(
                TableName="SecretSantaRecords",
                Item={
                    "UUID": {"S": str(uuid4())},
                    "party_name": {"S": requestBody["partyName"]},
                    "santa_name": {"S": person["name"]},
                    "santa_email": {"S": person["email"]},
                },
            )

        return makeResponse(200, "Check your email for your secret santa")

    return makeResponse(500, "Unable to find names in the body request.")


def shuffleNames(people: List[People]):
    shuffle(people)
    for index in range(len(people)):
        if index == (len(people) - 1):
            people[index]["target"] = people[0]["name"]
        else:
            people[index]["target"] = people[index + 1]["name"]
    return people
