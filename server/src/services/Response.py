import json
import os


class ResponseClass:
    def __init__(self):
        self.corsHeader = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": True,
        }

    def make(self, status: int, body):
        headers = {"Content-Type": "application/json", "charset": "UTF-8"}

        # Apply CORS headers for dev due to localhost
        if os.environ.get("stage") == "dev":
            headers = {**headers, **self.corsHeader}

        return {
            "statusCode": status,
            "headers": headers,
            "body": json.dumps({"result": body}),
        }
