import unittest
from unittest.mock import patch
from src.api.schedule import isOrderRandom, nameLottery


class TestIsOrderRandom(unittest.TestCase):
    def test_isOrderRandom_success(self):
        self.assertTrue(isOrderRandom([1, 0, 4, 2, 3]))

    def test_isOrderRandom_fail(self):
        self.assertFalse(isOrderRandom([0, 1, 4, 2, 3]))


class TestNameLottery(unittest.TestCase):
    def test_nameLottery_success(self):
        party = [
            {"name": "Luffy", "email": "luffy@strawhats.op"},
            {"name": "WhiteBeard", "email": "edward.newgate@whitebeard.op"},
            {"name": "Mihawk", "email": "hawkeyes@shichibukai.op"},
            {"name": "Law", "email": "trafalgar@hearts.op"},
        ]
        result = nameLottery(party)

        # Check original copy is untouched
        for person in party:
            self.assertFalse("giftee" in person)

        # Check no one received themselves and there is the same number of people
        count = 0
        for person in result:
            count = count + 1
            self.assertNotEqual(person["name"], person["giftee"])
        self.assertEqual(count, len(party))
