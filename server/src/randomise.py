import json
from random import shuffle
from typing import List, TypedDict
from src.makeResponse import makeResponse


class People(TypedDict, total=False):
    name: str
    email: str
    target: str


def random(event, context):
    requestBody = json.loads(event["body"])

    if "people" in requestBody:
        people: List[People] = requestBody["people"]

        if len(people) < 3:
            return makeResponse(500, "Please provide additional names.")
        response = {"people": shuffleNames(people)}
        return makeResponse(200, json.dumps(response))

    return makeResponse(500, "Unable to find names in the body request.")


def shuffleNames(people: List[People]):
    shuffle(people)
    for index in range(len(people)):
        if index == len(people) - 1:
            people[index]["target"] = people[0]["name"]
        else:
            people[index]["target"] = people[index + 1]["name"]
    return people
