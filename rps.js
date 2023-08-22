function getComputerChoice() {
  let compChoices = ['rock', 'paper', 'scissors'];
  return compChoices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'Tie';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') 
  ) {
    return 'Player wins';
  } else {
    return 'Computer wins';
  }
}

const playerSelection = window.prompt().toLowerCase();
const computerSelection = getComputerChoice();
console.log(playerSelection)
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection))

