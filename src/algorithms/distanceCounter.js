import countGrams from 'countGrams.js';
import normalise from 'normalise.js';

const getDistance = (textOne, textTwo) => {
  const textOneGrams = countGrams(normalise(textOne));
  const textTwoGrams = countGrams(normalise(textTwo));
};
