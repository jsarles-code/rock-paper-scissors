console.log("Hello, World!")

function getComputerChoice() {
    let randInt = Math.floor(Math.random() * 3);
    let array = ["Rock", "Scissors", "Paper"];
    let computerchoice = array[randInt];
    return computerchoice;
    console.log(computerchoice);
}
getComputerChoice();