const chalk = require("chalk");
const prompt = require("prompt-sync")({ sigint: true });

function playTicTacToe() {
  // Simplified implementation of Tic-Tac-Toe, where player must win or tie to proceed
  console.log(
    chalk.greenBright(
      "\nYou must defeat the dungeon guard at Tic-Tac-Toe to proceed!"
    )
  );

  // Initialize the board with empty spaces
  let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  let player = "X"; // Player
  let computer = "O"; // Computer

  // Display the board in the console
  function printBoard() {
    console.log(`
     ${board[0]} | ${board[1]} | ${board[2]}
    ---+---+---
     ${board[3]} | ${board[4]} | ${board[5]}
    ---+---+---
     ${board[6]} | ${board[7]} | ${board[8]}
    `);
  }

  // Check if a player has won
  function checkWin(player) {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ];
    return winningCombos.some((combo) =>
      combo.every((index) => board[index] === player)
    );
  }

  // Check if the game is a draw
  function checkDraw() {
    return board.every((cell) => cell !== " ");
  }

  // Get available moves (empty cells)
  function getAvailableMoves() {
    return board
      .map((cell, index) => (cell === " " ? index : null))
      .filter((index) => index !== null);
  }

  // Function to handle computer's turn
  function computerMove() {
    const availableMoves = getAvailableMoves();
    const move =
      availableMoves[Math.floor(Math.random() * availableMoves.length)];
    board[move] = computer;
    console.log("Computer chooses position:", move);
    printBoard();
  }

  // Main function to play the game
  async function playGame() {
    console.log("Welcome to Tic Tac Toe!");
    printBoard();

    while (true) {
      // Player's turn
      const availableMoves = getAvailableMoves();
      const prompt = new Select({
        name: "position",
        message: `Player ${player}, select your move`,
        choices: availableMoves.map((index) => ({
          name: index.toString(),
          message: `Cell ${index}`,
          value: index,
        })),
      });

      try {
        const move = await prompt.run();
        board[move] = player;
        printBoard();

        // Check if the player wins or the game is a draw
        if (checkWin(player)) {
          console.log(`Player ${player} wins!`);
          break;
        } else if (checkDraw()) {
          console.log("It's a draw!");
          break;
        }

        // Computer's turn
        computerMove();

        // Check if the computer wins or the game is a draw
        if (checkWin(computer)) {
          console.log(`Computer (${computer}) wins!`);
          break;
        } else if (checkDraw()) {
          console.log("It's a draw!");
          break;
        }
      } catch (error) {
        console.error("An error occurred:", error);
        break;
      }
    }
  }

  // Placeholder: Assume player won for demo purposes
  //   console.log(chalk.green("You win! The door unlocks."));
  //   return true;
}

module.exports = playTicTacToe;
