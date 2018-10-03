import { chunk } from 'lodash';

const makeRelative = (frequencies) => {
  // counting total
  const sum = Object.keys(frequencies).reduce((acc, e) =>
    acc + frequencies[e], 0);
  // division
  return Object.keys(frequencies).reduce((acc, e) =>
    ({ ...acc, [e]: frequencies[e] / sum }), {});
};

export default (text) => {
  const textArray = text.split('');
  // chunking text in array of 3 symbolGrams
  const gramsArray = chunk(textArray, 3).map(e => e.join(''));
  // counting symbolGrams
  const absoluteFrequencies = gramsArray.reduce((acc, gram) =>
    acc[gram] ? { ...acc, [gram]: acc[gram] + 1 } : { ...acc, [gram]: 1 }, {});
  // counting frequency as division of freq by total quantity of grams
  return makeRelative(absoluteFrequencies);
};
