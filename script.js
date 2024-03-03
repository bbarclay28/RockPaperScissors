const computerChoices = ["Rock", "Paper", "Scissors"]


function getRandomChoice(array){
    const randomNum = Math.floor(Math.random() * array.length);
    return array[randomNum];
}


let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection){
    
    computerSelection = getRandomChoice(computerChoices);
    playerSelection = prompt("Enter Rock, Paper, or Scissors");
    let roundResult;

    if (playerSelection === computerSelection) {
        roundResult = "Tie";
        console.log(roundResult);
    }

    else if ((playerSelection === "Paper" && computerSelection === "Rock") 
    || (playerSelection === "Rock" && computerSelection === "Scissors") 
|| (playerSelection === "Scissors" && computerSelection === "Paper")){
    roundResult = "You Lose. " + computerSelection + " beats " + playerSelection;
    console.log(roundResult);
    computerScore++
}
else{
    roundResult = "You Win. " + playerSelection + " beats " + computerSelection; 
    console.log(roundResult);
playerScore++
}
}

function playGame(){
    for(i = 1; i <= 5; i++){
        playRound();
        console.log(computerScore);
        console.log(playerScore);

    }
}

playGame()