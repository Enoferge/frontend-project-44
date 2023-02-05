#!/usr/bin/env node
import startGame from '../src/index.js';

const intro = 'Find the greatest common divisor of given numbers.';

const getCorrectAnswer = (num1, num2) => {
  let i = num1 > num2 ? num2 : num1;

  while (i > 0) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
    i = Math.floor(i / 2);
  }
  return 1;
};

const getQuestion = () => {
  const randomNumber1 = Math.floor(Math.random() * 100);
  const randomNumber2 = Math.floor(Math.random() * 100);

  const correctAnswer = getCorrectAnswer(randomNumber1, randomNumber2);

  return [`${randomNumber1} ${randomNumber2}`, correctAnswer];
};

startGame(intro, getQuestion);
