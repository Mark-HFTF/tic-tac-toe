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
      alert('It\'s a draw!');
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
    [1, 4
