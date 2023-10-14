console.log("Hello, World!")

let text;
let favchoice = prompt("Rock, Paper, Scissors, Shoot!");
switch(favchoice) {
  case "Rock":
    text = "Excellent choice!";
    break;
  case "Scissors":
    text = "Scissors is my favorite too!";
    break;
  case "Paper":
    text = "Really? Paper?";
    break;
  default:
    text = "Nice try";
}