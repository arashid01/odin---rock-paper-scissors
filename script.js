function getComputeChoice() {
	let num = Math.floor((Math.random() * 10));
	
	if (num >= 0 && num <= 3)
		return ("rock");
	else if (num >= 4 && num <= 7)
		return ("paper");
	else
		return ("scissors");
}

function playGame() {
	let humanScore = 0;
	let computerScore = 0;
	const result = document.querySelector("#result");

	function playRound(humanChoice, computerChoice) {
		result.textContent = '';
		const oneRound = document.createElement('p');
		if (humanChoice === computerChoice) {
			oneRound.textContent = "tie";
		} else if (
			(humanChoice === "rock" && computerChoice === "scissors") ||
			(humanChoice === "paper" && computerChoice === "rock") ||
			(humanChoice === "scissors" && computerChoice === "paper")
		) {
			oneRound.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
			humanScore++;
		} else {
			oneRound.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
			computerScore++;
		}
		const overall = document.createElement('p');
		overall.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
		result.appendChild(oneRound);
		result.appendChild(overall);

		if (parseInt(humanScore) === 5 || parseInt(computerScore) === 5)
		{
			const finalScore = document.createElement('p');
			if (humanScore > computerScore)
				finalScore.textContent = "Final result: Winner!";
			else if (humanScore < computerScore)
				finalScore.textContent = "Final result: Loser.";
			else
				finalScore.textContent = "Final result: Tie.";
			result.appendChild(finalScore);
			humanScore = 0;
			computerScore = 0;
			result.removeChild(oneRound);
			finalScore.appendChild(document.createElement("br"));
			finalScore.append("Replay? Choose your weapon!");
		}
	}

	const rock = document.querySelector("#rock");
	const paper = document.querySelector("#paper");
	const scissors = document.querySelector("#scissors");

	rock.addEventListener('click', () => {
		playRound("rock", getComputeChoice());
	});
	paper.addEventListener('click', () => {
		playRound("paper", getComputeChoice());
	});
	scissors.addEventListener('click', () => {
		playRound("scissors", getComputeChoice());
	});
}

playGame();