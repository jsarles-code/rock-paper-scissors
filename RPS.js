console.log("Hello, World!")

function getComputerChoice() {
    let randInt = Math.floor(Math.random() * 3);
    let array = ["rock", "paper", "scissors"];
    let computerChoice = array[randInt];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
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
    let computerSelection =getComputerChoice()
    let playerSelection = prompt().toLowerCase();
    console.log(playRound(playerSelection,computerSelection))    
    //if playRound() = 
     //2
    computerSelection =getComputerChoice()
     playerSelection = prompt().toLowerCase();
    console.log(playRound(playerSelection,computerSelection)) 
//3
    computerSelection =getComputerChoice()
    playerSelection = prompt().toLowerCase();
   console.log(playRound(playerSelection,computerSelection)) 
//4
   computerSelection =getComputerChoice()
   playerSelection = prompt().toLowerCase();
  console.log(playRound(playerSelection,computerSelection)) 
//5
  computerSelection =getComputerChoice()
     playerSelection = prompt().toLowerCase();
    console.log(playRound(playerSelection,computerSelection)) 
}
(game())

// Need a variable that gets updated depending on round result. 
// console .log the result
// score variable +1 = win +0 = draw -1 for loss
// game function needs to log the score

