import { keys, union, abs, max } from 'lodash';

const last = arr => arr.slice(-1)[0];
const isFound = (obj, g) => obj[g] !== undefined && obj[g] !== null;
const find = (obj, g) => obj[g];
const freqReduce = grams => (acc, e) =>
  isFound(grams, e) ? [...acc, find(grams, e)] : [...acc, 0];

const sumReduce = (acc, e) =>
  [...acc, last(acc) + e];
const getDistance = (grams1, grams2) => {
  // get gram length for calculations
  const unionGrams = union(keys(grams1), keys(grams2));
  const sorted = unionGrams.concat().sort();
  const { length } = Object.keys(grams1)[0];
  const options = Object.keys(sorted).length;
  const m = options ** length;
  const sorted1 = sorted.reduce(freqReduce(grams1), []);
  const sorted2 = sorted.reduce(freqReduce(grams2), []);
  const sum1 = sorted1.reduce(sumReduce, [0]);
  const sum2 = sorted2.reduce(sumReduce, [0]);
  const maxSumsDistance = max(sum1.map((e, index) => abs(e - sum2[index])));
  return Math.sqrt(m / 2) * maxSumsDistance;
  // merging keys to find insimilarities
};
export default getDistance;
