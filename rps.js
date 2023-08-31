function getComputerChoice() {
  let compChoices = ['rock', 'paper', 'scissors'];
  return compChoices[Math.floor(Math.random() * 3)];
}

// function getPlayerChoice() {
//   return prompt().toLowerCase();
// }

const rock = document.querySelector('.rock')
rock.addEventListener('click', () => {
  const playerSelection = 'rock';
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
})

const paper = document.querySelector('.paper')
paper.addEventListener('click', () => {
  const playerSelection = 'paper';
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
})

const scissors = document.querySelector('.scissors')
scissors.addEventListener('click', () => {
  const playerSelection = 'scissors';
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
})

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    let tie = 'tie'
    return tie;
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') 
  ) {
    return `player wins, ${playerSelection} beats ${computerSelection}`;
  } else {
    return `computer wins, ${computerSelection} beats ${playerSelection}`;
  }
}

// function game() {
//   let playerScore = 0;
//   let computerScore = 0;
//   let tieScore = 0;
  
//   for (let i = 0; i < 5; i += 1) {
//     const playerSelection = getPlayerChoice();
//     const computerSelection = getComputerChoice();
//     console.log(playerSelection, computerSelection)

//     let result = playRound(playerSelection, computerSelection);
//     console.log(result)
//     if (result === `player wins, ${playerSelection} beats ${computerSelection}`) {
//       playerScore += 1;
//     } else if (result === `computer wins, ${computerSelection} beats ${playerSelection}`) {
//       computerScore += 1;
//     } else {
//       tieScore += 1;
//     }
//   }
//   console.log(playerScore);
//   console.log(computerScore);
//   console.log(tieScore);
//   if (playerScore > computerScore) {
//     console.log('player wins the game');
//   } else if (playerScore < computerScore) {
//     console.log('computer wins the game');
//   } else {
//     console.log("it's a tie");
//   }
// }

// game();

