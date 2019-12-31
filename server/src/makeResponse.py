def makeResponse(statusCode: int, body: str):
    return {
        "statusCode": statusCode,
        "headers": {"Content-Type": "application/json", "charset": "UTF-8"},
        "body": body,
    }
