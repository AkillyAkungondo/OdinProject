document.addEventListener('DOMContentLoaded', function() {
  const rockBtn = document.getElementById('rockBtn');
  const paperBtn = document.getElementById('paperBtn');
  const scissorsBtn = document.getElementById('scissorsBtn');
  const resultDisplay = document.getElementById('resultDisplay');
  const playerScoreDisplay = document.getElementById('playerScoreDisplay');
  const computerScoreDisplay = document.getElementById('computerScoreDisplay');

  let playerScore = 0;
  let computerScore = 0;

  rockBtn.addEventListener('click', function () {
    playRound('rock');
  });

  paperBtn.addEventListener('click', function () {
    playRound('paper');
  });

  scissorsBtn.addEventListener('click', function () {
    playRound('scissors');
  });

  function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    let result;
    if (playerSelection === computerSelection) {
      result = "It's a tie!";
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      result = 'You win!';
      playerScore++;
    } else {
      result = 'You lose!';
      computerScore++;
    }

    resultDisplay.textContent = result;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    if (playerScore === 5) {
      alert('You win the game!');
      resetGame();
    } else if (computerScore === 5) {
      alert('Computer wins the game!');
      resetGame();
    }
  }

  function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    resultDisplay.textContent = '';
  }
});
