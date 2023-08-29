    /* sets the scores to 0 for both the player and the computer */
    let playerScore = 0
    let computerScore = 0
    let playerSelection;
    let computerSelection;

  /* randomly selects option for computer */
  function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"]
    return choices[(Math.floor(Math.random()*choices.length))]
  }    

  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => { 
    button.addEventListener('click', () => {
        playerSelection = button.getAttribute('id')
        console.log(playerSelection)
        oneRound(playerSelection, computerSelection)
  });
});

  /* plays one round for and adds a point to the score */
 function oneRound(playerSelection, computerSelection) {
  playerSelection = playerSelection;
    computerSelection = getComputerChoice()
    if (computerSelection == "Rock") {
      if (playerSelection == "Rock") {
        return "Tie! You both picked " + computerSelection
      }
      else if (playerSelection == "Paper") {
        playerScore = playerScore + 1
        return "You won! " + playerSelection + " beats " + computerSelection

      }
      else if (playerSelection == "Scissors") {
        computerScore = computerScore + 1
        return "You lost! " + computerSelection + " beats " + playerSelection
      }
    }
    else if (computerSelection == "Paper") {
      if (playerSelection == "Paper") {
        return "Tie! You both picked " + computerSelection
      }
      else if (playerSelection == "Scissors") {
        playerScore = playerScore + 1
        return "You won! " + playerSelection + " beats " + computerSelection
      }
      else if (playerSelection == "Rock") {
        computerScore = computerScore + 1
        return "You lost! " + computerSelection + " beats " + playerSelection
      }
    }
    else if (computerSelection == "Scissors") {
      if (playerSelection == "Scissors") {
        return "Tie! You both picked " + computerSelection
      }
      else if (playerSelection == "Rock") {
        playerScore = playerScore + 1
        return "You won! " + playerSelection + " beats " + computerSelection
      }
      else if (playerSelection == "Paper") {
        computerScore = computerScore + 1
        return "You lost! " + computerSelection + " beats " + playerSelection
      }
    }
  }


  
// /* game keeps going until someone reaches a score of 5 */
// function game() {
// while (playerScore < 5 && computerScore < 5) {
// console.log(oneRound())
// console.log("The score is " + playerScore + " to " + computerScore) 
// }
    
// }
// console.log(game())