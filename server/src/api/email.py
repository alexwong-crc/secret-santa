from src.services.Response import Response
from src.type.requests import SecretSantaReq
import json

Respond = Response()


def validateRequest(body):
    requiredKeys = ("party", "people")
    if all(keys in body for keys in requiredKeys):
        if type(body["party"]) is str and isinstance(body["people"], list):
            return True
    return False


def send(event, context):
    body = json.loads(event["body"])
    if not validateRequest(body):
        return Respond.make(400, "Request body is incorrect. Please double check.")

    return Respond.make(200, "hi")

