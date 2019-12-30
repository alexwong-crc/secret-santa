from typing import List
from src.randomise import shuffleNames, People
from unittest import TestCase


class TestShuffle(TestCase):
    def setUp(self):
        people: List[People] = [
            People(name="Alex", email="alex@hotmail.com"),
            People(name="Rosie", email="rosie@hotmail.com"),
            People(name="Frankie", email="frankie@hotmail.com"),
            People(name="Luffy", email="luffy@hotmail.com"),
            People(name="Whitebeard", email="whitebeard@hotmail.com"),
        ]

        self.shuffled = shuffleNames(people)

    def test_noone_picked_themselves(self):
        for person in self.shuffled:
            self.assertNotEqual(person["name"], person["target"])

    def test_everyone_was_picked(self):
        partyOne = []
        partyTwo = []
        for person in self.shuffled:
            partyOne.append(person["name"])
            partyTwo.append(person["target"])

        partyOne.sort()
        partyTwo.sort()
        self.assertListEqual(partyOne, partyTwo)

