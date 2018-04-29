// this file is designed to normalise the input - as in
// get it all to lowercase, get rid of punctuation marks and so on
const normaliseText = (text) => {
  const preformatted = text.toLowerCase();
  let output = '';
  const regex = /[абвгдеёжзийклмнопрстуфхцчшщъыьэюя ]+/g;
  const punctuationFree = text.match(regex).join('');
  const trailingWhitespaceFree = punctuationFree.replace(/ +(?= )/g,'');
  return trailingWhitespaceFree;
};

export default normaliseText;
