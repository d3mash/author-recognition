import countGrams from './countGrams';
import normalise from './normalise';

const getDistance = (textOne, textTwo) => {
  const textOneGrams = countGrams(normalise(textOne));
  const textTwoGrams = countGrams(normalise(textTwo));
};
