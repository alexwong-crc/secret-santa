from src.randomise import random
from unittest import TestCase, mock
import json


MOCK_SHUFFLE = [
    {"name": "Francesca", "email": "francesca@gmail.com", "target": "Alex",},
    {"name": "Alex", "email": "alex@gmail.com", "target": "Rosie"},
    {"name": "Rosie", "email": "rosie@gmail.com", "target": "Francesca",},
]


class Test_Randomise_Lambda(TestCase):
    @mock.patch("src.randomise.shuffleNames", return_value=MOCK_SHUFFLE)
    def test_200_response(self, mockShuffle):
        reqBody = {
            "body": json.dumps(
                {
                    "people": [
                        {"name": "Alex", "email": "alex@gmail.com"},
                        {"name": "Rosie", "email": "rosie@gmail.com"},
                        {"name": "Francesca", "email": "francesca@gmail.com"},
                    ]
                }
            )
        }

        result = random(reqBody, {})

        expected = {
            "statusCode": 200,
            "headers": {"Content-Type": "application/json", "charset": "UTF-8"},
            "body": json.dumps({"people": MOCK_SHUFFLE}),
        }

        self.assertEqual(result, expected)
