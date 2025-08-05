function getComputerChoice () {
    const randomNumber = Math.random()*3;
    if (randomNumber <=1) {
        return "rock";
    } else if (randomNumber <= 2) {
        return "paper";
    } else if (randomNumber <= 3) {
        return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! paper beats rock.");
        computerScore += 1;
        return "You lose! Paper beats rock.";
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats scissors.");
        humanScore += 1;
        return  "You win! Rock beats scissors.";
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats rock.");
        humanScore += 1;
        return "You win! Paper beats rock.";
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beat paper.");
        computerScore += 1;
        return "You lose! Scissors beat paper.";
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats scissors.");
        computerScore += 1;
        return "You lose! Rock beats scissors.";
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beat paper.");
        humanScore += 1;
        return "You win! Scissors beat paper.";
    } else if (humanChoice == computerChoice) {
        console.log("Draw");
        return "Draw";
    };
};

const buttons = document.querySelectorAll("img");
const resultText = document.querySelector("#result")
const runningScoreText = document.querySelector("#running-score")

buttons.forEach((img) => {
    img.addEventListener('click', () => {
        let result = playRound(img.id, getComputerChoice());
        resultText.textContent = result;
        console.log(humanScore);
        runningScoreText.textContent = `Scores: Human [${humanScore}] : Computer [${computerScore}]`;
        checkGameOver();
    });
});

const checkGameOver = () => {
    if (humanScore >= 5 || computerScore >=5) {
        alert("We have a winner!");
        humanScore = 0;
        computerScore = 0;
        runningScoreText.textContent = `Scores: Human [${humanScore}] : Computer [${computerScore}]`;
    };
};