console.log("Hello, World!")

function getComputerChoice() {
    let randInt = Math.floor(Math.random() * 3);
    let array = ["rock", "paper", "scissors"];
    let computerchoice = array[randInt];
    console.log(computerchoice);
    return computerchoice;
}

function playround() {
    let playerSelection = prompt("Rock,Paper,Scissors?");
    let computerSelection = getComputerChoice();
     playerSelection = playerSelection.toLowerCase;

    if (computerSelection == playerSelection) {
        return "It's a draw"
    }

    else {
        switch (playerSelection) {


            case rock:
                if (computerSelection = "Paper") { return "Paper beats Rock , You lose" }
                else {
                    return "Rock beats Scissors You win!"
                }
                break;

            case paper:
                if (computerSelection = "Scissors") { return "Scissors beats Rock , You lose" }
                else {
                    return "Rock beats Scissors You win!"
                }
                    break;
    
            case scissors:
                if (computerSelection = "Rock") { return "Rock Beats Scissors, You lose" }
                else {
                    return "Rock beats Scissors You win!"
                }
                break;

        }

    }


 }
