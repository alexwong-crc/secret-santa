import json
import copy
from uuid import uuid4
from random import shuffle
from src.services.DyanmoIO import DynamoIOClass
from src.services.Response import ResponseClass
from src.services.Email import EmailClass


def handler(event, context):
    body = json.loads(event.get("body"))
    Response = ResponseClass()
    Dynamo = DynamoIOClass()
    Email = EmailClass()

    # Define uuid for this party
    partyID = str(uuid4())

    # Create the party object in the table
    Dynamo.putItem(
        {
            "UUID": str(uuid4()),
            "type": "party",
            "info": {"dueDate": "Christmas day"},
            "partyID": partyID,
            "active": True,
        }
    )

    # Shuffle members
    party = nameLottery(body.get("people"))

    # Write people to table
    for person in party:
        row = {
            "UUID": str(uuid4()),
            "type": "person",
            "partyID": partyID,
            "active": True,
            "info": {"name": person.get("name"), "giftee": person.get("giftee")},
        }

        if "email" in person:
            row["email"] = person.get("email")

        if "sms" in person:
            row["sms"] = person.get("sms")

        Dynamo.putItem(row)
        res = Email.sendEmail(person)

    return Response.make(200, res)


def isOrderRandom(order):
    for index in range(0, len(order)):
        if index == order[index]:
            return False
    return True


def nameLottery(party):
    people = copy.deepcopy(party)
    order = list(range(0, len(people)))
    shuffle(order)

    while not isOrderRandom(order):
        shuffle(order)

    for index in range(0, len(people)):
        people[index]["giftee"] = people[order[index]].get("name")
    return people
