# rock-paper-scissors

this is all about writing my first program with javascript. 
assignment: https://www.theodinproject.com/lessons/foundations-rock-paper-scissors 

the goal is to create a rock-paper-scissors game
the code is based on two functions:
    getComputerChoice(): randomly generate a choice made by the computer
    getHumanChoice(): get human choice by a prompt
in addition, there are two functions to actually play the game: 
    playRound(): simulation of each round, including the rules of the game
    playGame(): the acutal game, with a predefined count of played rounds

when the player plays his choice, the computer will randomly generate its choice
if player and computer chose the same, the game will continue
if player and computer chose different elements, one will be the winner
with each round played, the game count will be updated
after 5 played rounds, the final count will be displayed