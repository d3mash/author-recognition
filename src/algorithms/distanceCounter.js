import { keys, union } from 'lodash';
import grams from './countGrams';

const getDistance = (text1, text2) => {
  const grams1 = grams(text1);
  const grams2 = grams(text2);
  // merging keys to find insimilarities
  const unionGrams = union(keys(grams1), keys(grams2));
  unionGrams.reduce((distance, gram) => {
    if (!grams1[gram]) {
      return distance + (grams2[gram] * grams2[gram]);
    } else if (!grams2[gram]) {
      return distance + (grams1[gram] * grams1[gram]);
    }
    return distance + ((grams1[gram] - grams2[gram]) ** 2);
  }, 0);
};
export default getDistance;
