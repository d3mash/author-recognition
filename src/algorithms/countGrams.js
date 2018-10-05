import fs from 'fs';
import normalise from './normalise';

const makeRelative = (frequencies) => {
  // counting total
  const sum = Object.keys(frequencies).reduce((acc, e) =>
    acc + frequencies[e], 0);
  // division
  return Object.keys(frequencies).reduce((acc, e) =>
    ({ ...acc, [e]: frequencies[e] / sum }), {});
};

export default (file, gramLength = 1) => {
  const text = fs.readFileSync(file);
  const normalised = normalise(text);
  const textArray = normalised.split('');
  // chunking text in array of same size symbolGrams
  const gramsArray = [];
  for (let i = 0; i < textArray.length - gramLength - 1; i + 1) {
    gramsArray.push(textArray.slice(i, i + gramLength).join(''));
  }
  // counting symbolGrams
  const absoluteFrequencies = gramsArray.reduce((acc, gram) =>
    acc[gram] ? { ...acc, [gram]: acc[gram] + 1 } : { ...acc, [gram]: 1 }, {});
  // counting frequency as division of freq by total quantity of grams
  return makeRelative(absoluteFrequencies);
};
