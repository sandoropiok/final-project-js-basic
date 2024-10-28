const readline = require("readline-sync");
const chalk = require("chalk");

function playRockPaperScissors() {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  console.log(
    chalk.yellow(
      "\nTo proceed, beat the dungeon guard in Rock, Paper, Scissors!"
    )
  );
  const playerChoice = readline
    .question(chalk.cyan("Choose rock, paper, or scissors: "))
    .toLowerCase();

  if (playerChoice === computerChoice) {
    console.log(
      chalk.yellow(`
          ┳┏┳┓╹┏┓  ┏┓  ┏┳┓┳┏┓╻  ┏┳┓┳┓┓┏  ┏┓┏┓┏┓┳┳┓ 
          ┃ ┃  ┗┓  ┣┫   ┃ ┃┣ ┃   ┃ ┣┫┗┫  ┣┫┃┓┣┫┃┃┃ 
          ┻ ┻  ┗┛  ┛┗   ┻ ┻┗┛•   ┻ ┛┗┗┛  ┛┗┗┛┛┗┻┛┗•
                                         `)
    );
    return playRockPaperScissors();
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(
      chalk.green(`
          ░█──░█ ░█▀▀▀█ ░█─░█ 　 ░█──░█ ▀█▀ ░█▄─░█ █ 
          ░█▄▄▄█ ░█──░█ ░█─░█ 　 ░█░█░█ ░█─ ░█░█░█ ▀ 
          ──░█── ░█▄▄▄█ ─▀▄▄▀ 　 ░█▄▀▄█ ▄█▄ ░█──▀█ ▄

      Ƭᕼᕮ ↁ〇〇ᖇ ⋃Ɲし〇ᙅ𐌊⟆, Ꮆ〇〇ᗪ し⋃ᑕ𐌊 ᓮƝ ƝᕮⲬƬ ᖇ〇〇Ⲙ❗`)
    );
    return true;
  } else {
    console.log(
      chalk.red(` 
          ██████████████████████████████████████████████
          █▄─█─▄█─▄▄─█▄─██─▄███▄─▄███─▄▄─█─▄▄▄▄█─▄─▄─█░█
          ██▄─▄██─██─██─██─█████─██▀█─██─█▄▄▄▄─███─███▄█
          ▀▀▄▄▄▀▀▄▄▄▄▀▀▄▄▄▄▀▀▀▀▄▄▄▄▄▀▄▄▄▄▀▄▄▄▄▄▀▀▄▄▄▀▀▄▀
        
      Ƭᕼᕮ ↁ〇〇ᖇ し〇ᑕ𐌊ᕮᗪ Բ〇ᖇᕮ⋎ᕮᖇ❗`)
    );
    return playRockPaperScissors();
  }
}

module.exports = playRockPaperScissors;
