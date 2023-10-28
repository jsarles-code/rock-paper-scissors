console.log("Hello, World!")

function getComputerChoice() {
    let randInt = Math.floor(Math.random() * 3);
    let array = ["rock", "paper", "scissors"];
    let computerChoice = array[randInt];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    //playerSelection = prompt("Rock,Paper,Scissors?");
    computerSelection = getComputerChoice();
   let result;

  if (computerSelection == playerSelection) {
        result = "It's a draw";
        return result;
    }

    else {
        switch (playerSelection) {


           case "rock":
                if (computerSelection == "paper") {
                    result = "Paper beats Rock , You lose";
                    return result;
                }
                else {
                    result = "Rock beats Scissors You win!";
                    return result;
                }
                break;

            case "paper":
                if (computerSelection == "scissors") {
                    result = "Scissors beats Rock , You lose";
                    return result;
                }
                else {
                    result = "Rock beats Scissors You win!";
                    return result;
                }
                break;

            case "scissors":
                if (computerSelection == "rock") {
                    result = "Rock Beats Scissors, You lose";
                    return result
                }
                else {
                    result = "Rock beats Scissors You win!";
                    return result;
                }
                break;
}
    }
  }

function game(){
    
}

// Need to keep score, repeat round function 5 times with player input, and put message at end. 