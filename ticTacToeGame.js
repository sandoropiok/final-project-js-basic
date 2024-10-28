// ticTacToeGame.js
const readline = require("readline-sync");
const { Select } = require("enquirer");
const chalk = require("chalk");
const prompt = require("prompt-sync")({ sigint: true });

// Set up the board and symbols
const board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
const player = 'X';
const computer = 'O';

// Display the board in a 3x3 format
function displayBoard() {
  console.log(`
    ${board[0]} | ${board[1]} | ${board[2]}
   ---+---+---
    ${board[3]} | ${board[4]} | ${board[5]}
   ---+---+---
    ${board[6]} | ${board[7]} | ${board[8]}
  `);
}

// Check if there’s a winner
function checkWin(marker) {
  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];
  return winConditions.some(condition =>
    condition.every(index => board[index] === marker)
  );
}

// Check for a draw (no empty spaces left)
function isDraw() {
  return board.every(cell => cell !== ' ');
}

// Handle player move
function playerMove() {
  let move;
  while (true) {
    move = parseInt(prompt('Enter your move (1-9): ')) - 1;
    if (move >= 0 && move <= 8 && board[move] === ' ') {
      board[move] = player;
      break;
    } else {
      console.log('Invalid move. Try again.');
    }
  }
}

// Handle computer move (random empty space)
function computerMove() {
  let move;
  while (true) {
    move = Math.floor(Math.random() * 9);
    if (board[move] === ' ') {
      board[move] = computer;
      break;
    }
  }
}

// Main game loop
function playGame() {
  console.log("Welcome to Tic-Tac-Toe!");
  while (true) {
    displayBoard();
    playerMove();
    if (checkWin(player)) {
      displayBoard();
      console.log('Congratulations! You won!');
      break;
    }
    if (isDraw()) {
      displayBoard();
      console.log("It's a draw!");
      break;
    }

    computerMove();
    if (checkWin(computer)) {
      displayBoard();
      console.log('Computer wins! Better luck next time.');
      break;
    }
    if (isDraw()) {
      displayBoard();
      console.log("It's a draw!");
      break;
    }
  }
}

// Start the game
//playGame();

function playTicTacToe() {
  // Simplified implementation of Tic-Tac-Toe, where player must win or tie to proceed
  console.log(chalk.greenBright("\nYou must defeat the dungeon guard at Tic-Tac-Toe to proceed!"));

  // Implementation here could range from simple print statements and user prompts to a fully interactive ASCII-based board.

  // Placeholder: Assume player won for demo purposes
  console.log(chalk.green("You win! The door unlocks."));
  return true;
}

module.exports = playTicTacToe; 𝚃𝚑𝚎𝚛𝚎'𝚜 𝚊 𝚗𝚘𝚝𝚎 𝚘𝚗 𝚝𝚑𝚎 𝚍𝚘𝚘𝚛: '𝚃𝚘 𝚘𝚙𝚎𝚗 𝚝𝚑𝚒𝚜 𝚍𝚘𝚘𝚛, 𝚢𝚘𝚞 𝚗𝚎𝚎𝚍 𝚝𝚘 𝚐𝚞𝚎𝚜𝚜 𝚝𝚑𝚎 𝚌𝚘𝚛𝚛𝚎𝚌𝚝 𝚗𝚞𝚖𝚋𝚎𝚛...