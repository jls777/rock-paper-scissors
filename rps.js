function getComputerChoice() {
  let compChoices = ['rock', 'paper', 'scissors'];
  return compChoices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    let tie = 'Tie'
    return tie;
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') 
  ) {
    let playerWins = 'Player wins';
    return playerWins;
  } else {
    let computerWins = 'Computer wins'
    return computerWins;
  }
}

const playerSelection = window.prompt('rock').toLowerCase();
const computerSelection = getComputerChoice();
console.log(playerSelection)
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection))

// function game() {
//   for (let i = 0; i < 5; i += 1) {
//     playRound(playerSelection, computerSelection)
//   }
// }
