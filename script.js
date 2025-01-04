const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const optionsDiv = document.querySelector('.input-options');
const resultDiv = document.querySelector('.display-result');

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

const roundResult = document.createElement('div');

const validateOptions = (computerInput, playerInput) => {
  if (computerInput === playerInput) {
    roundResult.textContent = "That's a tie";
    return;
  }

  if (
    (computerInput === 'rock' && playerInput === 'scissors') ||
    (computerInput === 'paper' && playerInput === 'rock') ||
    (computerInput === 'scissors' && playerInput === 'paper')
  ) {
    computerScore++;
    roundResult.textContent = 'Computer won this round!';
  } else {
    playerScore++;
    roundResult.textContent = 'You won this round!';
  }
};

function reset() {
  playerScore = 0;
  computerScore = 0;
}
function checkUI() {
  reset();
  resultDiv.innerHTML = '<h2>Results</h2>';
  resultDiv.append(displayPlayerScore);
  resultDiv.append(displayComputerScore);
  resultDiv.appendChild(roundResult);
  displayResult();
  roundResult.textContent = '';
}

const displayPlayerScore = document.createElement('div');
const displayComputerScore = document.createElement('div');

function displayResult() {
  displayPlayerScore.textContent = `Player Score: ${playerScore}`;
  displayComputerScore.textContent = `Computer Score: ${computerScore}`;

  if (playerScore === 5) {
    resultDiv.innerHTML += '<div>You win</div>';
    setTimeout(() => checkUI(), 2000);
  } else if (computerScore === 5) {
    resultDiv.innerHTML += '<div>Computer Wins</div>';
    setTimeout(() => checkUI(), 2000);
  }
}

function playRound(e) {
  getPlayerInput(e);
  if (playerInput === null) return;

  let computerInput = getComputerInput();

  validateOptions(computerInput, playerInput);
  displayResult();
}
// Event Listeners
checkUI();
optionsDiv.addEventListener('click', playRound);
