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

const displayResults = document.querySelector("#results");
let humanScore = 0;
let computerScore = 0;
const humanResult = document.querySelector("#humanResult");
const computerResult = document.querySelector("#computerResult");
humanResult.textContent = humanScore;
computerResult.textContent = computerScore;
const displayResult = document.querySelector("#displayResult");

const gameOver = document.createElement("p");

function playRound(humanChoice, computerChoice) {
  const tr = document.createElement("tr");
  const tdHuman = document.createElement("td");
  const tdComputer = document.createElement("td");
  const table = document.querySelector("table");

  const paraTie = "Tie, play again!";
  const paraWin = "Congratulations, you win!";
  const paraLose = "You lose!";
  const result = document.createElement("p");

  table.appendChild(tr); // display human and computer choices
  tr.appendChild(tdHuman);
  tr.appendChild(tdComputer);

  tdHuman.textContent = humanChoice; // set human and computer choices
  tdComputer.textContent = computerChoice;

  if (humanChoice == computerChoice) {
    console.log(paraTie);
    displayResult.textContent = paraTie;
  } else {
    if (
      (humanChoice == "rock" && computerChoice == "scissors") ||
      (humanChoice == "paper" && computerChoice == "rock") ||
      (humanChoice == "scissors" && computerChoice == "paper")
    ) {
      console.log(paraWin);
      displayResult.textContent = paraWin;
      humanScore += 1;
      humanResult.textContent = humanScore;
    } else {
      console.log(paraLose);
      displayResult.textContent = paraLose;
      computerScore += 1;
      computerResult.textContent = computerScore;
    }
  }
  // displayResults.appendChild(result);

  if (humanScore == 5 || computerScore == 5) {
    displayResult.textContent = "Game Over!";
    if (humanScore == 5) {
      displayResult.textContent += " Congratulations, you win!";
    } else {
      displayResult.textContent += " You lose, what a shame!";
    }
    humanButtons.forEach((button) => {
      button.disabled = true;
    });
  }

  // if (humanChoice == computerChoice) {
  //   para.appendChild(paraTie);
  // } else {
  //   if (
  //     (humanChoice == "rock" && computerChoice == "scissors") ||
  //     (humanChoice == "paper" && computerChoice == "rock") ||
  //     (humanChoice == "scissors" && computerChoice == "paper")
  //   ) {
  //     displayResults.appendChild(para);
  //     para.appendChild(paraWin);
  //     humanScore += 1;
  //   } else {
  //     displayResults.appendChild(para);
  //     para.appendChild(paraLose);
  //     computerScore += 1;
  //   }
  // }
  // displayResults.appendChild(result);
  // result.textContent = `Human ${humanScore} : ${computerScore} Computer`;

  // if (humanScore == 5 || computerScore == 5) {
  //   displayResults.appendChild(gameOver);
  //   gameOver.textContent = `Game Over! Final Score:
  //   Human ${humanScore} : ${computerScore} Computer`;
  //   humanButtons.forEach((button) => {
  //     button.disabled = true;
  //   });
  // }
}

const humanButtons = document.querySelectorAll("button");
humanButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.value);
    const playerSelection = button.value;
    playRound(playerSelection, getComputerChoice());
  });
});

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
