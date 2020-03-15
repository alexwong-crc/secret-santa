import json


class Response:
    def make(self, status: int, body):
        return {
            "statusCode": status,
            "headers": {"Content-Type": "application/json", "charset": "UTF-8"},
            "body": json.dumps({"result": body}),
        }
