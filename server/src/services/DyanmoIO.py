from boto3 import resource
import json


class DynamoIO:
    def __init__(self):
        dynamodb = resource("dynamodb")
        self.table = dynamodb.Table("SecretSantaRecords")

    def putItem(self, item):
        self.table.put_item(Item=item)
