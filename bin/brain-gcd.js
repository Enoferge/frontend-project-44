#!/usr/bin/env node
import startGame from '../src/index.js';

const intro = 'Find the greatest common divisor of given numbers.';

const getCorrectAnswer = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return getCorrectAnswer(num2, num1 % num2);
};

const getQuestion = () => {
  const randomNumber1 = Math.floor(Math.random() * 100);
  const randomNumber2 = Math.floor(Math.random() * 100);

  const correctAnswer = getCorrectAnswer(randomNumber1, randomNumber2);

  return [`${randomNumber1} ${randomNumber2}`, correctAnswer];
};

startGame(intro, getQuestion);
