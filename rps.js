function getComputerChoice() {
  let compChoices = ['rock', 'paper', 'scissors'];
  return compChoices[Math.floor(Math.random() * 3)];
}

function getWinner(playerScore, computerScore) {
  console.log(playerScore, computerScore)
  pScore.textContent = `player = ${playerScore}`;
  cScore.textContent = `computer = ${computerScore}`;
  if (playerScore === 5) {
    console.log('player wins');
    gameResult.textContent = 'game result = player wins';
  }
  if (computerScore === 5) {
    console.log('computer wins');
    gameResult.textContent = 'game result = computer wins';
  }
}

const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const divContainer = document.querySelector('.container');
const divResult = document.querySelector('.result');
const compPick = document.querySelector('.comp-pick');
const pScore = document.querySelector('.player-score');
const cScore = document.querySelector('.computer-score');
const gameResult = document.querySelector('.game-result');

// ---------------------------------------------------------





function game() {
  let playerScore = 0;
  let computerScore = 0;
  let tieScore = 0;
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      tieScore += 1
      divResult.textContent = 'match result = tie'
      
      return 'tie';
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper') 
    ) {
      playerScore += 1;
      divResult.textContent = `match result = player wins, ${playerSelection} beats ${computerSelection}`;
      return `player wins, ${playerSelection} beats ${computerSelection}`;
    } else {
      computerScore += 1;
      divResult.textContent = `match result = computer wins, ${computerSelection} beats ${playerSelection}`;
      return `computer wins, ${computerSelection} beats ${playerSelection}`;
    }
  
  }

  rock.addEventListener('click', () => {
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    compPick.textContent = `computer picks = ${computerSelection}`;
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    getWinner(playerScore, computerScore);
  })

  paper.addEventListener('click', () => {
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    compPick.textContent = `computer picks = ${computerSelection}`;
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    getWinner(playerScore, computerScore);
  })

  scissors.addEventListener('click', () => {
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    compPick.textContent = `computer picks = ${computerSelection}`;
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    getWinner(playerScore, computerScore);
  })

}

game()

