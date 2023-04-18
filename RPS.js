// Function - takes no parameters; returns a string of "Rock", "Paper", or "Scissors" with 1/3rd probability of each
function getComputerChoice() {
    const choice = Math.random() * 3;

    if(choice < 1) return "Rock";
    else if (choice < 2) return "Paper";
    else return "Scissors";
}