const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const optionsDiv = document.querySelector('.input-options');

const inputOptions = ['rock', 'paper', 'scissors'];
let playerInput;
let playerScore = 0,
  computerScore = 0;

const getComputerInput = () => {
  const computerInput =
    inputOptions[Math.floor(Math.random() * inputOptions.length)];
  return computerInput;
};

const getPlayerInput = (e) => {
  if (e.target === rockBtn) {
    playerInput = inputOptions[0];
  } else if (e.target === paperBtn) {
    playerInput = inputOptions[1];
  } else if (e.target === scissorsBtn) {
    playerInput = inputOptions[2];
  } else {
    playerInput = null;
    return;
  }
};

const validateOptions = (computerInput, playerInput) => {
  if (computerInput === playerInput) {
    console.log('Tie: no points for anyone.');
    return;
  }

  if (
    (computerInput === 'rock' && playerInput === 'scissors') ||
    (computerInput === 'paper' && playerInput === 'rock') ||
    (computerInput === 'scissors' && playerInput === 'paper')
  ) {
    computerScore++;
    console.log('Computer wins this round!');
  } else {
    playerScore++;
    console.log('You win this round!');
  }
};

function printResult(playerScore, computerScore, computerInput) {
  console.log(`Computer chose: ${computerInput}`);
  console.log(`You chose: ${playerInput}`);
  console.log(' ');
  console.log(`Player Score: ${playerScore}`);
  console.log(`Computer Score: ${computerScore}`);
  console.log('----------------------------------');
}

function playRound(e) {
  getPlayerInput(e);
  if (playerInput === null) return;

  let computerInput = getComputerInput();

  validateOptions(computerInput, playerInput);
  printResult(playerScore, computerScore, computerInput);
}

// Event Listeners
optionsDiv.addEventListener('click', playRound);
