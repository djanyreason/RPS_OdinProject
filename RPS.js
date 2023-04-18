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

// Function game() - Plays a best-of-5 game of Rock Paper Scissors in the Console
//      Prints game status by round and final result
// No Parameters
// Does not return
function game() {
    // Variables to track game state
    var round = 0;
    var playerScore = 0;
    var computerScore = 0;

    // Variables for each round's results
    var playerChoice;
    var computerChoice;
    var roundResult;

    while(round < 5) { // Main loop to run best-of-5 

        // Increment round number and print current game state
        round++;
        console.log('Round ' + round + ': Score Player ' + playerScore + ' - Computer ' + computerScore);

        // Nesting While Loops until Player or Computer wins the round
        // Inner loop runs until player gives valid input, and exits with roundResult showing the result
        // Outer loop runs until the result is not a draw
        
        roundResult = "Draw"; //initialize for outer loop

        while(roundResult.substring(0,4) === "Draw") {
            computerChoice = getComputerChoice();
            roundResult = "Invalid"; //initialize for inner loop
            while(roundResult.substring(0,7) === "Invalid") {
                playerChoice = prompt("Enter your selection for this round:");
                roundResult = playRound(playerChoice, computerChoice);
                console.log(roundResult);
            }
        }

        // Check if Player won the round, and update score appropriately
        if(roundResult.substring(4,5) === "W") playerScore++;
        else if (roundResult.substring(4,5) === "L") computerScore++;
        
        // Check if either Player or Computer has won 3 games (3 wins is Best-of-5)
        if(Math.max(playerScore, computerScore) === 3) break;
    }

    // Print final outcome
    console.log("Game Over!");
    console.log("Final Score: Player " + playerScore + " - Computer " + computerScore);
    if(playerScore > computerScore) console.log ("Player Wins!");
    else console.log("Computer Wins!");
}
