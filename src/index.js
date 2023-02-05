import readlineSync from 'readline-sync';

import greetAndAskName from './greeting.js';

const startGame = (intro, getQuestion) => {
  const name = greetAndAskName();
  console.log(intro);
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = getQuestion();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== String(correctAnswer)) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      break;
    } else {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${name}!`);
      }
    }
  }
};

export default startGame;
