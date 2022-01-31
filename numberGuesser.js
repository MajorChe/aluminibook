let prompt = require("prompt-sync")();

const getRandomInt = () => {
  return Math.floor(Math.random() * 10);
};
const numberGusesing = () => {
  const randomNum = getRandomInt();
  console.log(randomNum);
  const history = [];
  let guess = false;
  while (!guess) {
    let answer = Number(prompt("Guess a number: "));
    console.log("history", history);
    if (history.includes(answer)) {
      console.log("already guessed!!");
    } else if (answer === randomNum) {
      console.log("correct answer");
      console.log(`You guessed in: ${history.length + 1} attempts`);
      guess = true;
      break;
    } else if (isNaN(answer)) {
      console.log("not a number try again");
    } else {
      if (answer < randomNum) {
      console.log("too low");
      history.push(answer);
    } else {
      console.log("too high");
      history.push(answer);
    }
  }
}
};

numberGusesing();
