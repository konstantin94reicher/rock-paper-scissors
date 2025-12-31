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

let humanScore = 0; 
let computerScore = 0; 

function playRound(humanChoice, computerChoice) {
    const para = document.createElement("p"); 
    const result = document.createElement("p"); 
    const paraTie = document.createTextNode(" - tie, play again!");
    const paraWin = document.createTextNode(" - congratulations, you win!");
    const paraLose = document.createTextNode(" - you lose!");
    para.textContent = `Human: ${humanChoice}, Computer: ${computerChoice}`;
    displayResults.appendChild(para); 
    if (humanChoice == computerChoice) {
        para.appendChild(paraTie);
    } else {
      if (
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")
      ) {
        displayResults.appendChild(para);
        para.appendChild(paraWin);
        humanScore += 1;
      } else {
        displayResults.appendChild(para);
        para.appendChild(paraLose); 
        computerScore += 1;
      }
    }
    displayResults.appendChild(result); 
    result.textContent = `Human ${humanScore} : ${computerScore} Computer`;
  }

const humanButtons = document.querySelectorAll("button");
humanButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = button.value;
    playRound(playerSelection, getComputerChoice()); 
  });
});

const displayResults = document.querySelector("#results"); 



/*
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  
  
  playRound(humanSelection, getComputerChoice());
  console.log(
    `Game over, final count: Human ${humanScore} : ${computerScore} Computer`
  );
  if (humanScore > computerScore) {
    console.log("Congratulations, you win!!!");
  } else if (computerScore > humanScore) {
    console.log("You lose, what a shame!");
  } else {
    console.log("It's a tie!");
  }
}
*/

// playGame();
