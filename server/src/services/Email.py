import json
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail


class EmailClass:
    def __init__(self):
        self.sendGrid = SendGridAPIClient(os.environ.get("sendGridAPIKey"))
        self.fromEmailAddress = "secret-santa@alexhomingwong.co.uk"

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
                "status": response.status_code,
            }
        except Exception as error:
            return error
