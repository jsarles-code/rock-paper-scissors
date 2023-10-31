console.log("Hello, World!")

function getComputerChoice() {
    let randInt = Math.floor(Math.random() * 3);
    let array = ["rock", "paper", "scissors"];
    let computerChoice = array[randInt];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
   // console.log(computerSelection)
   let result;

  if (computerSelection == playerSelection) {
        //result = "It's a draw";
        result = 0
        return result;
    }

    else {
        switch (playerSelection) {


           case "rock":
                if (computerSelection == "paper") {
                    //result = "Paper beats Rock , You lose";
                    result = -1
                    return result;
                }
                else {
                    //result = "Rock beats Scissors You win!";
                    result = 1
                    return result;
                }
                break;

            case "paper":
                if (computerSelection == "scissors") {
                    result = -1
                    //result = "Scissors beats Rock , You lose";
                    return result;
                }
                else {
                    result = 1
                    //result = "Rock beats Scissors You win!";
                    return result;
                }
                break;

            case "scissors":
                if (computerSelection == "rock") {
                    result = -1
                    //result = "Rock Beats Scissors, You lose";
                    return result
                }
                else {
                    result = 1
                    //result = "Rock beats Scissors You win!";
                    return result;
                }
                break;
}
    }
  }

function game(){
    let computerSelection =getComputerChoice()
    let playerSelection = prompt().toLowerCase();
    let score ;
    score = playRound(playerSelection,computerSelection)
    console.log(score)
    //if playRound() = 
     //2
    computerSelection =getComputerChoice()
     playerSelection = prompt().toLowerCase();
     score = score + playRound(playerSelection,computerSelection)
     console.log(score)

    computerSelection =getComputerChoice()
     playerSelection = prompt().toLowerCase();
     score = score + playRound(playerSelection,computerSelection)
     console.log(score)
     
     computerSelection =getComputerChoice()
     playerSelection = prompt().toLowerCase();
     score = score + playRound(playerSelection,computerSelection)
     console.log(score)
     
     computerSelection =getComputerChoice()
     playerSelection = prompt().toLowerCase();
     score = score + playRound(playerSelection,computerSelection)
     console.log(score)
}     
(game())

// Need a variable that gets updated depending on round result. 
// console .log the result
// score variable +1 = win +0 = draw -1 for loss
// game function needs to log the score
// return a number 
// game returns a string if we get the number
