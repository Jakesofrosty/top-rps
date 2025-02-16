
let humanScore = 0;
let computerScore = 0;

function playGame() {


let computer = function getComputerChoice(choice1) {
choice1 = Math.random();
if (choice1 <= 0.33) {
    return "Rock";
}
else if (choice1 > 0.33 && choice1 <= 0.67) {
    return "Paper";
}
else {
    return "Scissors";
}
}


let userAnswer = prompt("Choose: Rock, Paper, or Scissors: "); 

function getHumanChoice(choice) {
    if (choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase() === "Rock") {
        return "Rock";
    }
    else if (choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase() === "Scissors") {
        return "Scissors";
    }
    else if (choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase() === "Paper") {
        return "Paper";
    }
    else {
        return "Response invalid. Please enter: Rock, Paper, or Scissors."
    }
}
const humanSelection = getHumanChoice(userAnswer);
console.log(humanSelection !== "Response invalid. Please enter: Rock, Paper, or Scissors." 
    ? `You chose - ${humanSelection}` 
    : humanSelection);



function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Rock") {
        return humanScore ++ + computerScore++ + console.log("Computer chose - Rock: You Tied.");
    }
    else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        return humanScore ++ + console.log("Computer chose - Scissors: You Win! :)");
    }
    else if (humanChoice === "Rock" && computerChoice === "Paper") {
        return computerScore ++ + console.log("Computer chose - Paper: You Lose! :(");
    }
    else if (humanChoice === "Paper" && computerChoice === "Paper") {
        return humanScore ++ + computerScore++ + console.log("Computer chose - Paper: You Tied. :|");
    }
    else if (humanChoice === "Paper" && computerChoice === "Rock") {
        return humanScore ++ + console.log("Computer chose - Rock: You Win! :)");
    }
    else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        return computerScore ++ + console.log("Computer chose - Scissors: You Lose! :(");
    }
    else if (humanChoice === "Scissors" && computerChoice === "Scissors") {
        return humanScore ++ + computerScore++ + console.log("Computer chose - Scissors: You Tied. :|");
    }
    else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        return humanScore ++ + console.log("Computer chose - Paper: You Win! :)");
    }
    else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        return computerScore ++ + console.log("Computer chose - Rock: You Lose! :(");
    }


}

const computerSelection = computer();
playRound(humanSelection, computerSelection)
console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
}

(function gameLoop() {
    playGame();
    if (humanScore < 5 && computerScore < 5){
        gameLoop();
    } else {
        console.log(humanScore === 5 ? "Game Over: You Win! Refresh page to play again." : "Game Over: You Lose! Refresh page to play again." );
    }
} )();



