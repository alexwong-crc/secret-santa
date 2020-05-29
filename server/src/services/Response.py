import json
import os


class ResponseClass:
    def __init__(self):
        self.corsHeader = {"dev": "*", "prod": "https://santa.alexhomingwong.co.uk/*"}

    def make(self, status: int, body):
        headers = {
            "Content-Type": "application/json",
            "charset": "UTF-8",
            "Access-Control-Allow-Origin": self.corsHeader[os.environ.get("stage")],
        }

        # Apply CORS headers for dev due to localhost
        if os.environ.get("stage") == "dev":
            headers = {**headers, **self.corsHeader}

        return {
            "statusCode": status,
            "headers": headers,
            "body": json.dumps({"result": body}),
        }
