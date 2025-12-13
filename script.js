/*
    the goal is to create a rock-paper-scissors game
    when the player plays his choice, the computer will randomly generate its choice
    if player and computer chose the same, the game will continue
    if player and computer chose different elements, one will be the winner
*/

function getComputerChoice() {
    let num = Math.random(); 

    if (num < 0.33334) {
        return "rock"; 
    } else if (num >= 0.33334 && num < 0.66667) {
        return "paper"; 
    } else {
        return "scissors"; 
    }
}

console.log(getComputerChoice());