const chalk = require("chalk");
const figlet = require("figlet");
const { Select } = require("enquirer");

const playTicTacToe = () => {
  return new Promise((resolve) => {
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
    const printBoard = () => {
      console.log(`
     ${board[0]} | ${board[1]} | ${board[2]}
    ---+---+---
     ${board[3]} | ${board[4]} | ${board[5]}
    ---+---+---
     ${board[6]} | ${board[7]} | ${board[8]}
    `);
    };

    // Check if a player has won
    const checkWin = (player) => {
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
    };

    // Check if the game is a draw
    const checkDraw = () => {
      return board.every((cell) => cell !== " ");
    };

    // Get available moves (empty cells)
    const getAvailableMoves = () => {
      return board
        .map((cell, index) => (cell === " " ? index : null))
        .filter((index) => index !== null);
    };

    // Function to handle computer's turn
    const computerMove = () => {
      const availableMoves = getAvailableMoves();
      const move =
        availableMoves[Math.floor(Math.random() * availableMoves.length)];
      board[move] = computer;
      console.log(
        chalk.yellowBright(
          "ＧＵＡＲＤＩＡＮ ＣＨＯＯＳＥＳ ＰＯＳＩＴＩＯＮ： "
        ),
        move + 1
      ); // Display computer's move (1-indexed)
      printBoard();
    };

    // Main game loop
    const gameLoop = () => {
      // Player's turn
      const availableMoves = getAvailableMoves();
      const prompt = new Select({
        name: "position",
        message: chalk.cyanBright(
          `ＰＬＡＹＥＲ ${player}， ＳＥＬＥＣＴ ＹＯＵＲ ＭＯＶＥ`
        ),
        choices: availableMoves.map((index) => ({
          name: index.toString(),
          message: ` ＰＯＳＩＴＩＯＮ ${index + 1}`,
          value: index,
        })),
      });

      prompt
        .run()
        .then((move) => {
          board[move] = player;
          printBoard();

          if (checkWin(player)) {
            console.log(
              chalk.greenBright(`
    █▀▀ █▀█ █▄░█ █▀▀ █▀█ ▄▀█ ▀█▀ █░█ █░░ ▄▀█ ▀█▀ █ █▀█ █▄░█ █▀
    █▄▄ █▄█ █░▀█ █▄█ █▀▄ █▀█ ░█░ █▄█ █▄▄ █▀█ ░█░ █ █▄█ █░▀█ ▄█
   
    ＰＬＡＹＥＲ ${player} ＷＩＮＳ！`)
            );
            resolve(true); // Resolve the promise with success
            return;
          }
          computerMove(); // Computer's turn

          if (checkWin(computer)) {
            console.log(
              chalk.redBright(`
    █▄█ █▀█ █░█   █▀▀ ▄▀█ █ █░░ █▀▄
    ░█░ █▄█ █▄█   █▀░ █▀█ █ █▄▄ █▄▀
  
  ＧＵＡＲＤＩＡＮ (${computer}) ＷＩＮＳ！`)
            );
            resolve(false); // Resolve the promise with failure
            return;
          }
          gameLoop(); // Continue the game loop
        })
        .catch((error) => {
          console.error("An error occurred:", error);
          resolve(false); // Resolve the promise with failure in case of error
        });
    };

    gameLoop(); // Start the game loop
  });
};

module.exports = playTicTacToe;
