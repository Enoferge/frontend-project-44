#!/usr/bin/env node
import Game from '../src/game.js';

const getCorrectAnswer = (number) => {
  if (number < 2) {
    return 'no';
  }

  let i = 2;

  while (i < number) {
    if (number % i === 0) {
      return 'no';
    }
    i += 1;
  }
  return 'yes';
};

const getQuestion = () => {
  const number = Math.floor(Math.random() * 100);

  const correctAnswer = getCorrectAnswer(number);
  return [number, correctAnswer];
};

const intro = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const game = new Game(intro, getQuestion);
game.startGame();
