
function getComputerChoice() {
     let choice = ["rock", "paper", "scissors"];
     let randomRPS = choice[Math.floor(Math.random() * choice.length)];
     return randomRPS;
}

function playRound(playerSelection, computerSelection) {
     if (playerSelection == "rock" && computerSelection == "paper") {
          return "The Computer threw: Paper. You lose! Rock beats Paper.  The robot uprising will now commence."
     } else if (playerSelection == "paper" && computerSelection == "rock") {
          return "The Computer threw: Rock.  You win! Paper beats Rock! There may still be hope for humanity!";
     } else if (playerSelection == "rock" && computerSelection == "scissors") {
          return "The Computer threw: Scissors.  You win!  Rock beats Scissors!  Rest well knowing that humanity is safe.";
     } else if (playerSelection == "scissors" && computerSelection == "rock") {
          return "The Computer threw: Rock. You lose!  Rock beats Scissors!  The robot uprising will now commence.";
     } else if (playerSelection == "paper" && computerSelection == "scissors") {
          return "The Computer threw: Scissors.  You lose!  Scissors beats Paper!  The robot uprising will now commence.";
     } else if (playerSelection == "scissors" && computerSelection == "paper") {
          return "The Computer threw: Paper.  You win!  Scissors beats Paper!  Report to the office for your prize.";
     } else if (playerSelection === computerSelection) {
          return "It seems that we have reached an impasse.";
     }
}


/*function game() {
     for (let i = 0; i < 5; i++) {
          let playerSelection = prompt(
               "Pick your fighter!"
          ).toLowerCase();
          let computerSelection = getComputerChoice();
          console.log(playRound(playerSelection, computerSelection));
     }
}

game();*/