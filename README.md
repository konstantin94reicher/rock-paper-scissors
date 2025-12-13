# rock-paper-scissors

this is all about writing my first program with javascript. <br>
assignment: https://www.theodinproject.com/lessons/foundations-rock-paper-scissors <br>

the goal is to create a rock-paper-scissors game<br>
the code is based on two functions:<br>
    - getComputerChoice(): randomly generate a choice made by the computer<br>
    - getHumanChoice(): get human choice by a prompt<br>
in addition, there are two functions to actually play the game:<br> 
    - playRound(): simulation of each round, including the rules of the game<br>
    - playGame(): the acutal game, with a predefined count of played rounds<br>

when the player plays his choice, the computer will randomly generate its choice<br>
if player and computer chose the same, the game will continue<br>
if player and computer chose different elements, one will be the winner<br>
with each round played, the game count will be updated<br>
after 5 played rounds, the final count will be displayed<br>