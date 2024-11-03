const { Select } = require("enquirer");
const chalk = require("chalk");

const playRockPaperScissors = () => {
  return new Promise((resolve) => {
    const choices = [" 尺龱⼕长", " 尸闩尸㠪尺", " 丂⼕工丂丂龱尺丂"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    console.log(
      chalk.yellow(
        "\n  ㄒ龱 尸尺龱⼕㠪㠪ↁ⸝ 乃㠪闩ㄒ ㄒ廾㠪 ↁㄩƝᎶ㠪龱Ɲ Ꮆㄩ闩尺ᗪ 工Ɲ 尺龱⼕长⸝ 尸闩尸㠪尺⸝ 丂⼕工丂丂龱尺丂!"
      )
    );
    const prompt = new Select({
      name: "playerChoice",
      message: chalk.cyan(
        `\n   ⼕廾龱丂㠪 尺龱⼕长⸝ 尸闩尸㠪尺 龱尺 丂⼕工丂丂龱尺丂:
        `
      ),
      choices: choices,
    });

    prompt
      .run()
      .then((playerChoice) => {
        console.log(
          chalk.bgMagenta(
            `\n   ㄚ龱ㄩ ⼕廾龱丂㠪 ${playerChoice}⸝ 闩Ɲᗪ ㄒ廾㠪 Ꮆㄩ闩尺ᗪ ⼕廾龱丂㠪 ${computerChoice}.`
          )
        );

        if (playerChoice === computerChoice) {
          console.log(
            chalk.yellowBright(`
          ┳┏┳┓╹┏┓  ┏┓  ┏┳┓┳┏┓╻  ┏┳┓┳┓┓┏  ┏┓┏┓┏┓┳┳┓ 
          ┃ ┃  ┗┓  ┣┫   ┃ ┃┣ ┃   ┃ ┣┫┗┫  ┣┫┃┓┣┫┃┃┃ 
          ┻ ┻  ┗┛  ┛┗   ┻ ┻┗┛•   ┻ ┛┗┗┛  ┛┗┗┛┛┗┻┛┗•
        
      ㄚ龱ㄩ 廾闩ᐯ㠪 龱Ɲ㠪 爪龱尺㠪 ⼕廾闩Ɲ⼕㠪❗`)
          );
          return resolve(playRockPaperScissors());
        } else if (
          (playerChoice === " 尺龱⼕长" &&
            computerChoice === " 丂⼕工丂丂龱尺丂") ||
          (playerChoice === " 尸闩尸㠪尺" && computerChoice === " 尺龱⼕长") ||
          (playerChoice === " 丂⼕工丂丂龱尺丂" &&
            computerChoice === " 尸闩尸㠪尺")
        ) {
          console.log(
            chalk.green(`
          ░█──░█ ░█▀▀▀█ ░█─░█ 　 ░█──░█ ▀█▀ ░█▄─░█ █ 
          ░█▄▄▄█ ░█──░█ ░█─░█ 　 ░█░█░█ ░█─ ░█░█░█ ▀ 
          ──░█── ░█▄▄▄█ ─▀▄▄▀ 　 ░█▄▀▄█ ▄█▄ ░█──▀█ ▄

      ㄒ廾㠪 ᗪ龱龱尺 ㄩƝ㇄龱⼕长丂⸝ Ꮆ龱龱ᗪ ㇄ㄩ⼕长 工Ɲ Ɲ㠪乂ㄒ 尺龱龱爪❗`)
          );
          resolve(true);
        } else {
          console.log(
            chalk.red(` 
          ██████████████████████████████████████████████
          █▄─█─▄█─▄▄─█▄─██─▄███▄─▄███─▄▄─█─▄▄▄▄█─▄─▄─█░█
          ██▄─▄██─██─██─██─█████─██▀█─██─█▄▄▄▄─███─███▄█
          ▀▀▄▄▄▀▀▄▄▄▄▀▀▄▄▄▄▀▀▀▀▄▄▄▄▄▀▄▄▄▄▀▄▄▄▄▄▀▀▄▄▄▀▀▄▀
        
      ㄒ廾㠪 ᗪ龱龱尺 尺㠪爪闩工Ɲ丂 ㇄龱⼕长㠪ᗪ❗`)
          );
          resolve(false);
        }
      })
      .catch((error) => {
        console.error("Ａｎ ｅｒｒｏｒ ｏｃｃｕｒｒｅｄ：", error);
        resolve(false);
      });
  });
};
module.exports = playRockPaperScissors;
