// this file is designed to normalise the input - as in
// get it all to lowercase, get rid of punctuation marks and so on

const normaliseText = (text) => {
  const preformatted = text.toLowerCase();
  const regex = /[абвгдеёжзийклмнопрстуфхцчшщъыьэюя ]+/g; // filters out all non-letters
  const punctuationFree = preformatted.match(regex).join('');
  return punctuationFree.replace(/\s\s+/g, ' '); // removes trailing whitespaces
};

export default normaliseText;
