import json
import os


class ResponseClass:
    def make(self, status: int, body):
        headers = {
            "Content-Type": "application/json",
            "charset": "UTF-8",
            "Access-Control-Allow-Origin": os.environ.get("domainURL"),
        }

        return {
            "statusCode": status,
            "headers": headers,
            "body": json.dumps({"result": body}),
        }
