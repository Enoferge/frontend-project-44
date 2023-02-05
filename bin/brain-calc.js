#!/usr/bin/env node
import Game from '../src/game.js';

const allOperations = ['*', '+', '-'];
const intro = 'What is the result of the expression?';

const getCorrectAnswer = (operation, num1, num2) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return NaN;
  }
};

const getQuestion = () => {
  const operation = allOperations[Math.floor(Math.random() * 3)];
  const randomNumber1 = Math.floor(Math.random() * 100);
  const randomNumber2 = Math.floor(Math.random() * 100);

  const correctAnswer = getCorrectAnswer(operation, randomNumber1, randomNumber2);

  return [`${randomNumber1} ${operation} ${randomNumber2}`, correctAnswer];
};

const game = new Game(intro, getQuestion);
game.startGame();
