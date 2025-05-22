function getComputeChoice() {
	let num = Math.floor((Math.random() * 10));
	
	if (num >= 0 && num <= 3) {
		console.log("Computer: rock");
		return ("rock");
	} else if (num >= 4 && num <= 7) {
		console.log("Computer: paper");
		return ("paper");
	} else {
		console.log("Computer: scissors");
		return ("scissors");
	}
}

function getHumanChoice() {
	let choice = prompt("Type your answer: rock, paper or scissors. ");

	if (choice === "rock" || choice === "Rock" || choice === "ROCK") {
		console.log("Human: rock");
		return ("rock");
	} else if (choice === "paper" || choice === "Paper" || choice === "PAPER") {
		console.log("Human: paper");
		return ("paper");
	} else if (choice === "scissors" || choice === "Scissors" || choice === "SCISSORS") {
		console.log("Human: scissors");
		return ("scissors");
	} else {
		return (null);
	}
}

function playGame() {
	let humanScore = 0;
	let computerScore = 0;

	function playRound(humanChoice, computerChoice) {
		if (humanChoice === computerChoice) {
			console.log("tie");
		} else if (
			(humanChoice === "rock" && computerChoice === "scissors") ||
			(humanChoice === "paper" && computerChoice === "rock") ||
			(humanChoice === "scissors" && computerChoice === "paper")
		) {
			console.log(`You win! ${humanChoice} beats ${computerChoice}`);
			humanScore++;
		} else {
			console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
			computerScore++;
		}
		console.log("Human:", humanScore, "| Computer:", computerScore);
	}

	for (let i = 0; i < 5; i++) {
		let humanAnswer = getHumanChoice();
		if (humanAnswer === null) {
			console.log("Invalid choice. Skipping round.");
			continue;
		}
		let computerAnswer = getComputeChoice();
		playRound(humanAnswer, computerAnswer);
	}

	if (humanScore > computerScore)
		console.log("Winner!");
	else if (humanScore < computerScore)
		console.log("Loser.");
	else
		console.log("Tie.");
}

playGame();