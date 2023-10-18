console.log("Hello, World!")

function getComputerChoice() {
    let randInt = Math.floor(Math.random() * 3);
    let array = ["rock", "paper", "scissors"];
    let computerChoice = array[randInt];
    return computerChoice;
}

function playRound() {
    let playerSelection = prompt("Rock,Paper,Scissors?");
    let computerSelection = getComputerChoice();
    let result;
    playerSelection = playerSelection.toLowerCase;

    if (computerSelection == playerSelection) {
        result = "It's a draw";
        return result;
    }

    else {
        switch (playerSelection) {


            case "rock":
                if (computerSelection == "Paper") {
                    result = "Paper beats Rock , You lose";
                    return result;
                }
                else {
                    result = "Rock beats Scissors You win!"; 
                    return result;
                }
                break;

            case "paper":
                if (computerSelection == "Scissors") {
                    result = "Scissors beats Rock , You lose";
                    return result;  
                }
                else {
                    return "Rock beats Scissors You win!";
                }
                break;

            case "scissors":
                if (computerSelection == "Rock") { return "Rock Beats Scissors, You lose" }
                else {
                    return "Rock beats Scissors You win!";
                }
                break;

        }

    }


}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));