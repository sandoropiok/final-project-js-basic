const { Select } = require("enquirer");
const chalk = require("chalk");

function playRockPaperScissors() {
  return new Promise((resolve) => {
    const choices = [" ＲＯＣＫ", " ＰＡＰＰＥＲ", " ＳＣＩＳＳＯＲＳ"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    console.log(
      chalk.yellow(
        "\n ＴＯ ＰＲＯＣＥＥＤ， ＢＥＡＴ ＴＨＥ ＤＵＮＧＥＯＮ ＧＵＡＲＤ ＩＮ ＲＯＣＫ， ＰＡＰＥＲ， ＳＣＩＳＳＯＲＳ！"
      )
    );
    const prompt = new Select({
      name: "playerChoice",
      message: chalk.cyan(
        `\n      ＣＨＯＯＳＥ ＲＯＣＫ， ＰＡＰＥＲ ＯＲ ＳＣＩＳＳＯＲＳ： `
      ),
      choices: choices,
    });

    prompt
      .run()
      .then((playerChoice) => {
        console.log(
          chalk.yellow(
            `\n      ＹＯＵ ＣＨＯＳＥ ${playerChoice}，ＡＮＤ ＴＨＥ ＧＵＡＲＤ ＣＨＯＳＥ ${computerChoice}.`
          )
        );

        if (playerChoice === computerChoice) {
          console.log(
            chalk.yellow(`
          ┳┏┳┓╹┏┓  ┏┓  ┏┳┓┳┏┓╻  ┏┳┓┳┓┓┏  ┏┓┏┓┏┓┳┳┓ 
          ┃ ┃  ┗┓  ┣┫   ┃ ┃┣ ┃   ┃ ┣┫┗┫  ┣┫┃┓┣┫┃┃┃ 
          ┻ ┻  ┗┛  ┛┗   ┻ ┻┗┛•   ┻ ┛┗┗┛  ┛┗┗┛┛┗┻┛┗•
        
      Ⴤ〇ᑌ ᕼᗩ⋎ᕮ 〇Ɲᕮ Ⲙ〇ᖇᕮ ᙅᕼᗩƝᑕᕮ❗`)
          );
          return resolve(playRockPaperScissors());
        } else if (
          (playerChoice === " ＲＯＣＫ" &&
            computerChoice === " ＳＣＩＳＳＯＲＳ") ||
          (playerChoice === " ＰＡＰＰＥＲ" &&
            computerChoice === " ＲＯＣＫ") ||
          (playerChoice === " ＳＣＩＳＳＯＲＳ" &&
            computerChoice === " ＰＡＰＰＥＲ")
        ) {
          console.log(
            chalk.green(`
          ░█──░█ ░█▀▀▀█ ░█─░█ 　 ░█──░█ ▀█▀ ░█▄─░█ █ 
          ░█▄▄▄█ ░█──░█ ░█─░█ 　 ░█░█░█ ░█─ ░█░█░█ ▀ 
          ──░█── ░█▄▄▄█ ─▀▄▄▀ 　 ░█▄▀▄█ ▄█▄ ░█──▀█ ▄

      Ƭᕼᕮ ↁ〇〇ᖇ ⋃Ɲし〇ᙅ𐌊⟆, Ꮆ〇〇ᗪ し⋃ᑕ𐌊 ᓮƝ ƝᕮⲬƬ ᖇ〇〇Ⲙ❗`)
          );
          resolve(true);
        } else {
          console.log(
            chalk.red(` 
          ██████████████████████████████████████████████
          █▄─█─▄█─▄▄─█▄─██─▄███▄─▄███─▄▄─█─▄▄▄▄█─▄─▄─█░█
          ██▄─▄██─██─██─██─█████─██▀█─██─█▄▄▄▄─███─███▄█
          ▀▀▄▄▄▀▀▄▄▄▄▀▀▄▄▄▄▀▀▀▀▄▄▄▄▄▀▄▄▄▄▀▄▄▄▄▄▀▀▄▄▄▀▀▄▀
        
      Ƭᕼᕮ ↁ〇〇ᖇ し〇ᑕ𐌊ᕮᗪ Բ〇ᖇᕮ⋎ᕮᖇ❗`)
          );
          resolve(false);
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
        resolve(false);
      });
  });
}
module.exports = playRockPaperScissors;
