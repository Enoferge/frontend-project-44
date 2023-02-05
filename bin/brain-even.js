#!/usr/bin/env node
import startGame from '../src/index.js';

const getQuestion = () => {
  const number = Math.floor(Math.random() * 100);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return [number, correctAnswer];
};

const intro = 'Answer "yes" if the number is even, otherwise answer "no".';

startGame(intro, getQuestion);
