const inputOptions = ['rock', 'paper', 'scissors'];

const getComputerInput = () => {
  const computerInput =
    inputOptions[Math.floor(Math.random() * inputOptions.length)];
  return computerInput;
};

const getPlayerInput = () => {
  let playerInput = +prompt(
    'Enter 1 for "rock"\nEnter 2 for "paper"\nEnter 3 for "scissors"'
  );
  if (playerInput != 1 && playerInput != 2 && playerInput != 3) {
    console.log('invalid input');
    return;
  } else {
    playerInput = inputOptions[playerInput - 1];
    return playerInput;
  }
};

let playerScore = 0,
  computerScore = 0;

const validateOptions = (computerInput, playerInput) => {
  switch (computerInput) {
    case 'rock':
      if (computerInput === playerInput) {
        console.log('tie: no points for any of you');
      } else if (playerInput === 'scissors') {
        computerScore++;
      } else {
        //playerInput === 'paper'
        playerScore++;
      }
      break;

    case 'paper':
      if (computerInput === playerInput) {
        console.log('tie: no points for any of you');
      } else if (playerInput === 'rock') {
        computerScore++;
      } else {
        playerScore++;
      }
      break;

    case 'scissors':
      if (computerInput === playerInput) {
        console.log('tie: no points for any of you');
      } else if (playerInput === 'paper') {
        computerScore++;
      } else {
        playerScore++;
      }
      break;
  }
};

function printResult(playerScore, computerScore) {
  console.log(`Player Score: ${playerScore}`);
  console.log(`Computer Score: ${computerScore}`);
}

while (playerScore < 5 && computerScore < 5) {
  computerInput = getComputerInput();
  console.log(`Computer chose: ${computerInput}`);

  playerInput = getPlayerInput();
  console.log(`You chose: ${playerInput}`);

  validateOptions(playerInput, computerInput);
  printResult(playerScore, computerScore);
  console.log('----------------------------------');
}
if (playerScore === 5) {
  console.log('Yeeeh...You won');
} else if (computerScore === 5) {
  console.log('sheesh...you lost with a computer');
}
