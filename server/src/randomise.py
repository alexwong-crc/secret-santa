import json
from random import shuffle
from typing import List


def makeResponse(statusCode: int, body: str):
    return {
        "statusCode": statusCode,
        "headers": {"Content-Type": "application/json", "charset": "UTF-8"},
        "body": body,
    }


def random(event, context):
    requestBody = json.loads(event["body"])

    if "names" in requestBody:
        names = requestBody["names"]

        if len(names) < 3:
            return makeResponse(500, "Please provide additional names.")

        response = shuffleNames(names)

        return makeResponse(200, json.dumps(response))

    return makeResponse(500, "Unable to find names in the body request.")


def shuffleNames(names: List[str]):
    shuffle(names)
    shuffleNames = {}
    for index in range(len(names)):
        if index == len(names) - 1:
            shuffleNames[names[index]] = names[0]
        else:
            shuffleNames[names[index]] = names[index + 1]
    return shuffleNames
