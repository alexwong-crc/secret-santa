import json
import os
from boto3 import resource


class DynamoIOClass:
    def __init__(self):
        dynamodb = resource("dynamodb")
        self.table = dynamodb.Table(os.getenv("dynamoTableDataLayer"))

    def putItem(self, item):
        self.table.put_item(Item=item)
