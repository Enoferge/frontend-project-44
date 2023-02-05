#!/usr/bin/env node
import Game from '../src/game.js';

const intro = 'What number is missing in the progression?';

const getQuestion = () => {
  const start = Math.floor(Math.random() * 15);
  const count = 5 + Math.floor(Math.random() * 10);
  const step = Math.floor(Math.random() * 10);
  const missingNumIndex = Math.floor(Math.random() * count);
  const progression = [start];

  for (let i = 1; i < count; i += 1) {
    progression.push(progression[i - 1] + step);
  }

  const correctAnswer = progression[missingNumIndex];
  const progressionToShow = [...progression];
  progressionToShow[missingNumIndex] = '..';

  return [`${progressionToShow.join(' ')}`, correctAnswer];
};

const game = new Game(intro, getQuestion);
game.startGame();
