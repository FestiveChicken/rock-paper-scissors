    /* sets the scores to 0 for both the player and the computer */
    let playerScore = 0
    let computerScore = 0
    let playerSelection;
    let computerSelection;

  /* randomly selects option for computer */

const displayRoundResult = document.querySelector('#roundResult')
const displayScore = document.querySelector('#score')
const displayResult = document.querySelector('#result')


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => { 
  button.addEventListener('click', () => {
    playerSelection = button.getAttribute('id')
    oneRound(playerSelection, computerSelection)
  });
});

function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"]
  return choices[(Math.floor(Math.random()*choices.length))]
}    

/* plays one round for and adds a point to the score */
function oneRound(playerSelection, computerSelection) {
  playerSelection = playerSelection;
  computerSelection = getComputerChoice()
    if (computerSelection == "Rock") {
      if (playerSelection == "Rock") {
        displayRoundResult.textContent = "Tie! You both picked " + computerSelection
        displayScore.textContent = "The score is " + playerScore + " to " + computerScore;
      }
      else if (playerSelection == "Paper") {
        playerScore = playerScore + 1
        displayRoundResult.textContent = "You won! " + playerSelection + " beats " + computerSelection
        displayScore.textContent = "The score is " + playerScore + " to " + computerScore;
        if (playerScore == 5) {
          displayResult.textContent = "You Won the game!!!"
        }

      }
      else if (playerSelection == "Scissors") {
        computerScore = computerScore + 1
        displayRoundResult.textContent = "You lost! " + computerSelection + " beats " + playerSelection
        displayScore.textContent = "The score is " + playerScore + " to " + computerScore;
        if (computerScore == 5) {
          displayResult.textContent = "Oh no! Computer won!"
        }
      }
    }
    else if (computerSelection == "Paper") {
      if (playerSelection == "Paper") {
        displayRoundResult.textContent = "Tie! You both picked " + computerSelection
        displayScore.textContent = "The score is " + playerScore + " to " + computerScore;
      }
      else if (playerSelection == "Scissors") {
        playerScore = playerScore + 1
        displayRoundResult.textContent = "You won! " + playerSelection + " beats " + computerSelection
        displayScore.textContent = "The score is " + playerScore + " to " + computerScore;
        if (playerScore == 5) {
          displayResult.textContent = "You Won the game!!!"
        }
      }
      else if (playerSelection == "Rock") {
        computerScore = computerScore + 1
        displayRoundResult.textContent = "You lost! " + computerSelection + " beats " + playerSelection
        displayScore.textContent = "The score is " + playerScore + " to " + computerScore;
        if (computerScore == 5) {
          displayResult.textContent = "Oh no! Computer won!"
        }
      }
    }
    else if (computerSelection == "Scissors") {
      if (playerSelection == "Scissors") {
        displayRoundResult.textContent = "Tie! You both picked " + computerSelection
        displayScore.textContent = "The score is " + playerScore + " to " + computerScore;
        }
      else if (playerSelection == "Rock") {
        playerScore = playerScore + 1
        displayRoundResult.textContent = "You won! " + playerSelection + " beats " + computerSelection
        displayScore.textContent = "The score is " + playerScore + " to " + computerScore;
        if (playerScore == 5) {
          displayResult.textContent = "You Won the game!!!"
        }
      }
      else if (playerSelection == "Paper") {
        computerScore = computerScore + 1
        displayRoundResult.textContent = "You lost! " + computerSelection + " beats " + playerSelection
        displayScore.textContent = "The score is " + playerScore + " to " + computerScore;
        if (computerScore == 5) {
          displayResult.textContent = "Oh no! Computer won!"
        }
      }
    }
  }
