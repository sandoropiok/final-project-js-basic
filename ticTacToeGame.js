const chalk = require("chalk");
const { Select } = require("enquirer");

function playTicTacToe() {
  // Welcome message
  console.log(
    chalk.greenBright(`
  ╦ ╦┌─┐┬ ┬  ┌┬┐┬ ┬┌─┐┌┬┐  ┌┬┐┌─┐┌─┐┌─┐┌─┐┌┬┐  ┌┬┐┬ ┬┌─┐  ┌┬┐┬ ┬┌┐┌┌─┐┌─┐┌─┐┌┐┌  ┌─┐┬ ┬┌─┐┬─┐┌┬┐  
  ╚╦╝│ ││ │  ││││ │└─┐ │    ││├┤ ├┤ ├┤ ├─┤ │    │ ├─┤├┤    │││ │││││ ┬├┤ │ ││││  │ ┬│ │├─┤├┬┘ ││  
   ╩ └─┘└─┘  ┴ ┴└─┘└─┘ ┴   ─┴┘└─┘└  └─┘┴ ┴ ┴    ┴ ┴ ┴└─┘  ─┴┘└─┘┘└┘└─┘└─┘└─┘┘└┘  └─┘└─┘┴ ┴┴└──┴┘ 
             ┌─┐┌┬┐  ╔╦╗┬┌─┐  ╔╦╗┌─┐┌─┐  ╔╦╗┌─┐┌─┐  ┌┬┐┌─┐  ┌─┐┬─┐┌─┐┌─┐┌─┐┌─┐┌┬┐┬
             ├─┤ │    ║ ││  ───║ ├─┤│  ───║ │ │├┤    │ │ │  ├─┘├┬┘│ ││  ├┤ ├┤  │││
             ┴ ┴ ┴    ╩ ┴└─┘   ╩ ┴ ┴└─┘   ╩ └─┘└─┘   ┴ └─┘  ┴  ┴└─└─┘└─┘└─┘└─┘─┴┘o 
`)
  );

  // Initialize the board with empty spaces
  let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  const player = "X"; // Player
  const computer = "O"; // Computer

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
    if (availableMoves.length > 0) {
      const move =
        availableMoves[Math.floor(Math.random() * availableMoves.length)];
      board[move] = computer;
      console.log("ＧＵＡＲＤＩＡＮ ＣＨＯＯＳＥＳ ＰＯＳＩＴＩＯＮ： ", move + 1); // Display computer's move (1-indexed)
      printBoard();
    }
  }

  // Main function to play the game
  function playGame() {
    console.log("Welcome to Tic Tac Toe!");
    printBoard();

    const gameLoop = () => {
      // Player's turn
      const availableMoves = getAvailableMoves();

      const prompt = new Select({
        name: "position",
        message: `ＰＬＡＹＥＲ ${player}， ＳＥＬＥＣＴ ＹＯＵ ＭＯＶＥ`,
        choices: availableMoves.map((index) => ({
          name: ` ＰＯＳＩＴＩＯＮ ${index + 1}`,
          value: index,
        })),
      });

      prompt
        .run()
        .then((move) => {
          board[move] = player;
          printBoard();

          // Check if the player wins or the game is a draw
          if (checkWin(player)) {
            console.log(`ＰＬＡＹＥＲ ${player} ＷＩＮＳ！`);
            return;
          } else if (checkDraw()) {
            console.log("It's a draw!");
            return;
          }

          // Computer's turn
          computerMove();

          // Check if the computer wins or the game is a draw
          if (checkWin(computer)) {
            console.log(`ＧＵＡＲＤＩＡＮ (${computer}) ＷＩＮＳ！`);
            return;
          } else if (checkDraw()) {
            console.log("It's a draw!");
            return;
          }

          // Continue the game loop
          gameLoop();
        })
        .catch((error) => {
          console.error("An error occurred:", error);
        });
    };

    gameLoop(); // Start the game loop
  }

  playGame(); // Call the playGame function to start
}

module.exports = playTicTacToe;
