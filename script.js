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

// console.log(getComputerChoice());

function getHumanChoice() {
    let insertHumanChoice = prompt("Enter your choice"); 
    return insertHumanChoice; 
}

// console.log(getHumanChoice()); 

let humanScore = 0; 
let computerScore = 0; 

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log(`Human: ${humanChoice}, Computer: ${computerChoice}`)
        console.log("Play again!"); 
    } else {
        if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper") {
            console.log(`Human: ${humanChoice}, Computer: ${computerChoice}`)
            console.log("Congratulations, you win!");
            humanScore += 1; 
        } else {
            console.log(`Human: ${humanChoice}, Computer: ${computerChoice}`)
            console.log("You lose!");
            computerScore += 1; 
        }
    }
    console.log(`Human score: ${humanScore}`); 
    console.log(`Computer score: ${computerScore}`);
}

const humanSelection = getHumanChoice().toLowerCase; 
const computerSelection = getComputerChoice; 

playRound(humanSelection, computerSelection); 