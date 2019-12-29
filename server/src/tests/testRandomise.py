from src.randomise import shuffleNames
from unittest import TestCase


class TestStringMethods(TestCase):
    def setUp(self):
        names = ["Alex", "Rosie", "Luffy", "Zoro", "Whitebeard"]
        self.shuffled = shuffleNames(names)

    def test_noone_picked_themselves(self):
        for name in self.shuffled:
            self.assertNotEqual(name, self.shuffled[name])

    def test_everyone_was_picked(self):
        nameOne = []
        nameTwo = []
        for name in self.shuffled:
            nameOne.append(name)
            nameTwo.append(self.shuffled[name])

        nameOne.sort()
        nameTwo.sort()
        self.assertListEqual(nameOne, nameTwo)

