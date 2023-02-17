
function getComputerChoice() {
     let choice = ["Rock", "Paper", "Scissors"];
     let randomRPS = choice[Math.floor(Math.random() * choice.length)];
     return randomRPS;
}

function playRound(playerSelection, computerSelection) {
     if (playerSelection == "Rock" && computerSelection == "Paper") {
          return "You lose! Rock beats Paper.  The robot uprising will now commence."
     } else if (playerSelection == "Paper" && computerSelection == "Rock") {
          return "You win! Paper beats Rock! There may still be hope for humanity!";
     } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
          return "You win!  Rock beats Scissors!  Rest well knowing that humanity is safe.";
     } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
          return "You lose!  Rock beats Scissors!  The robot uprising will now commence.";
     } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
          return "You lose!  Scissors beats Paper!  The robot uprising will now commence.";
     } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
          return "You win!  Scissors beats Paper!  Report to the office for your prize.";
     } else if (playerSelection === computerSelection) {
          return "It seems that we have reached an impasse.";
     }
}


function game() {
     for (let i = 0; i < 5; i++) {
          let playerSelection = prompt(
               "Pick your fighter!"
          ).toLowerCase();
          let computerSelection = getComputerChoice();
          console.log(playRound(playerSelection, computerSelection));
     }
}

game();