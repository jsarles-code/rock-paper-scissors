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
        console.log("It's a draw");
        result = 0
        return result;
    }

    else {
        switch (playerSelection) {


           case "rock":
                if (computerSelection == "paper") {
                    console.log("Paper beats Rock , You lose");
                    result = -1
                    return result;
                }
                else {
                    console.log("Rock beats Scissors You win!");
                    result = 1
                    return result;
                }
                break;

            case "paper":
                if (computerSelection == "scissors") {
                    result = -1
                    console.log("Scissors beats Paper , You lose");
                    return result;
                }
                else {
                    result = 1
                    console.log("Paper beats Rock You win!");
                    return result;
                }
                break;

            case "scissors":
                if (computerSelection == "rock") {
                    result = -1
                    console.log("Rock Beats Scissors, You lose");
                    return result
                }
                else {
                    result = 1
                    console.log("Scissors beats Paper You win!");
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
     if (score > 0) {
        winner = "You Win";
     }

        else if (score < 0) {
        winner = "You lose";
        }
        else {
        winner = "Its a draw" 
     }
     console.log(winner)
}     
(game())

// Need a variable that gets updated depending on round result. 
// console .log the result
// score variable +1 = win +0 = draw -1 for loss
// game function needs to log the score
// return a number 
// game returns a string if we get the number
