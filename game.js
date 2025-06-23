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

function getHumanChoice () {
    const choice = prompt("Choose: rock, paper, or scissors.");
    return choice;
}


function playGame(humanSelection, computerSelection) {
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("You lose! paper beats rock.");
            computerScore += 1;
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("You win! Rock beats scissors.");
            humanScore += 1;
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("You win! Paper beats rock.");
            humanScore += 1;
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log("You lose! Scissors beat paper.");
            computerScore += 1;
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log("You lose! Rock beats scissors.");
            computerScore += 1;
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You win! Scissors beat paper.");
            humanScore += 1;
        } else if (humanChoice == computerChoice) {
            console.log("Draw");
        }
    }

    for (let roundCounter = 0; roundCounter < 5; roundCounter++) {
        const computerSelection = getComputerChoice()
        const humanSelection = getHumanChoice()

        playRound(humanSelection, computerSelection)
    }
    return "Human: " + humanScore + " --- Computer: " + computerScore
}

console.log(playGame())