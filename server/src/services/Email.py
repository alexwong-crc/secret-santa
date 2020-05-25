import json
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail


class EmailClass:
    def __init__(self):
        self.sendGrid = SendGridAPIClient(os.environ.get("sendGridAPIKey"))
        self.fromEmailAddress = "secret-santa@alexhomingwong.co.uk"
        self.statusMeanings = {
            200: "OK",
            202: "ACCEPTED",
            400: "BAD REQUEST",
            401: "UNAUTHORIZED",
            403: "FORBIDDEN",
            404: "NOT FOUND",
            405: "METHOD NOT ALLOWED",
            413: "PAYLOAD TOO LARGE",
            415: "UNSUPPORTED MEDIA TYPE",
            429: "TOO MANY REQUESTS",
            500: "SERVER UNAVAILABLE",
            502: "SERVICE NOT AVAILABLE",
        }

    def sendEmail(self, person):
        message = Mail(
            from_email=f"{self.fromEmailAddress}",
            to_emails=f"{person.get('email')}",
            subject="Secret Santa",
            html_content=f"This year, your secret santa is <strong>{person.get('giftee')}</strong>",
        )

        try:
            response = self.sendGrid.send(message)
            return {
                "message": self.statusMeanings[response.status_code],
                "code": response.status_code,
            }
        except Exception as error:
            return {
                "message": self.statusMeanings[error.status_code],
                "code": error.status_code,
            }
