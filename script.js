const cells = document.querySelectorAll('[data-cell]');
const restartButton = document.getElementById('restart');
let currentPlayer = 'X';

function handleClick(e) {
  const cell = e.target;
  if (cell.getAttribute('data-mark')) return;
  cell.textContent = currentPlayer;
  cell.setAttribute('data-mark', currentPlayer);
  if (checkWin(currentPlayer)) {
    setTimeout(() => {
      alert(`${currentPlayer} wins!`);
      resetGame();
    }, 100);
    return;
  }
  if (isBoardFull()) {
    setTimeout(() => {
      alert("It's a draw!");
      resetGame();
    }, 100);
    return;
  }
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin(player) {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return winConditions.some((combination) =>
    combination.every((index) => cells[index].getAttribute('data-mark') === player),
  );
}

function isBoardFull() {
  return [...cells].every((cell) => cell.getAttribute('data-mark'));
}

function resetGame() {
  currentPlayer = 'X';
  cells.forEach((cell) => {
    cell.textContent = '';
    cell.removeAttribute('data-mark');
  });
}

cells.forEach((cell) => cell.addEventListener('click', handleClick));
restartButton.addEventListener('click', resetGame);
