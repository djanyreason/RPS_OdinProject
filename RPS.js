// Function getComputerChoice() - Randomly selects a choice of Rock, Paper, or Scissors
// Takes no parameters
// Returns a string of "Rock", "Paper", or "Scissors"
function getComputerChoice() {
    const choice = Math.random() * 3;

    if(choice < 1) return "Rock";
    else if (choice < 2) return "Paper";
    else return "Scissors";
}

// Function playRound(playerChoice, computerChoice) - Evaluates a round of RPS
// Parameter playerChoice and computerChoice are strings
//      must be "rock", "paper", or "scissors", capitalization irrelevant
// Returns a String; either "You [Win/Lose]! X beats Y" or "Draw! Both choose Z"
function playRound(playerChoice, computerChoice) {
    // Create local variables for choices with standardized capitalization
    const pCStd = playerChoice.substring(0,1).toUpperCase() + playerChoice.substring(1,playerChoice.length).toLowerCase();
    const cCStd = computerChoice.substring(0,1).toUpperCase() + computerChoice.substring(1,computerChoice.length).toLowerCase();

    //Verify that both inputs are valid
    if(!(pCStd === "Rock" || pCStd === "Paper" || pCStd === "Scissors"))
        return "Invalid Player Selection";
    else if (!(cCStd === "Rock" || cCStd === "Paper" || cCStd === "Scissors"))
        return "Invalid Computer Selection";
    
    //Checks for a Draw
    if(pCStd === cCStd) return "Draw! Both choose " + pCStd;

    //Checks if Player wins
    if((pCStd === "Rock" && cCStd === "Scissors") ||
       (pCStd === "Paper" && cCStd === "Rock") ||
       (pCStd === "Scissors" && cCStd === "Paper"))
        return "You Win! " + pCStd + " beats " + cCStd;
    
    //If inputs are valid, not a Draw, not Player win, then Computer must win
    else return "You Lose! " + cCStd + " beats " + pCStd;
}