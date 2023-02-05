#!/usr/bin/env node
import startGame from '../src/index.js';

const getCorrectAnswer = (number) => {
  if (number === 1) {
    return 'no';
  }

  let i = Math.floor(number / 2);

  while (i > 1) {
    if (number % i === 0) {
      return 'no';
    }
    i = Math.floor(i / 2);
  }
  return 'yes';
};

const getQuestion = () => {
  const number = Math.floor(Math.random() * 100);

  const correctAnswer = getCorrectAnswer(number);
  return [number, correctAnswer];
};

const intro = 'Answer "yes" if given number is prime. Otherwise answer "no".';

startGame(intro, getQuestion);
