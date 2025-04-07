let humanScore = 0;
let computerScore = 0;
const resultsDiv = document.getElementById("results");

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice) {
    let resultMessage = "";
    if (humanChoice === computerChoice) {
        resultMessage = `Computer chose - ${computerChoice}: You Tied.`;
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        humanScore++;
        resultMessage = `Computer chose - ${computerChoice}: You Win! :)`;
    } else {
        computerScore++;
        resultMessage = `Computer chose - ${computerChoice}: You Lose! :(`;
    }

    resultsDiv.textContent = `
        You chose - ${humanChoice}
        ${resultMessage}
        Current Score - You: ${humanScore}, Computer: ${computerScore}
    `;

    if (humanScore === 5) {
        resultsDiv.textContent += "\nYou win the game!";
        disableButtons();
    } else if (computerScore === 5) {
        resultsDiv.textContent += "\nComputer wins the game!";
        disableButtons();
    }
}

function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

rockBtn.addEventListener("click", () => playRound("Rock", getComputerChoice()));
paperBtn.addEventListener("click", () => playRound("Paper", getComputerChoice()));
scissorsBtn.addEventListener("click", () => playRound("Scissors", getComputerChoice()));