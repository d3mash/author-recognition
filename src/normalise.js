// this file is designed to normalise the input - as in
// get it all to lowercase, get rid of punctuation marks and so on
const normaliseText = (text) => {
  const preformatted = text.toLowerCase();
  const textLength = text.length;
  let output ='';
  const isPunctuation = symbol => {
    return symbol === '.' || symbol === ',' || symbol === '!' || symbol === '?' || symbol === ':' || symbol === ';' || symbol === '-';
  }
  for (let counter = 0; counter < textLength; counter = counter + 1) {
    if (!isPunctuation(preformatted[counter])) {
      output = output + preformatted[counter];
    }
  }
  return output;
};

export default normaliseText;
