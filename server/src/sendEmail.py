import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
import json


def send(person):
    message = Mail(
        from_email="wonghoming.dev@gmail.com",
        to_emails=person["email"],
        subject="Secret Santa",
        html_content="This year, your secret santa is <strong>{}</strong>".format(
            person["target"]
        ),
    )
    print("Current person: ", person)
    try:
        sg = SendGridAPIClient(os.environ.get("SENDGRID_API_KEY"))
        response = sg.send(message)
        print(response.status_code)
        print(response.header)
        print(response.body)

    except Exception as e:
        print(e)

