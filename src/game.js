import readlineSync from 'readline-sync';
import greetAndAskName from './greeting.js';

export default class Game {
  constructor(intro, getQuestion) {
    this.intro = intro;
    this.getQuestion = getQuestion;
  }

  startGame() {
    this.name = greetAndAskName();
    console.log(this.intro);
    for (let i = 0; i < 3; i += 1) {
      const [question, correctAnswer] = this.getQuestion();
      console.log(`Question: ${question}`);
      const answer = readlineSync.question('Your answer: ');
      if (answer !== String(correctAnswer)) {
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
        console.log(`Let's try again, ${this.name}!`);
        break;
      } else {
        console.log('Correct!');
        if (i === 2) {
          console.log(`Congratulations, ${this.name}!`);
        }
      }
    }
  }
}
