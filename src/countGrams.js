const countGrams = text => {
  const length = text.length;
  let gramsArray = [];
  for (let counter = 0; counter < length-2; counter = counter + 1) {
    let gram = text[counter]+text[counter+1]+text[counter+2];
    gramsArray.push(gram);
  }
  const counts = gramsArray.reduce((acc, e) => {acc[e] = (acc[e] || 0) + 1; return acc; }, []);
  const normalise = gramsArray => {
    const max = Math.max(...Object.values(gramsArray));
    for (var key in gramsArray) {
      if(gramsArray.hasOwnProperty(key)) {
          gramsArray[key] = gramsArray[key] / max;
      }
    }
    return gramsArray;
  };
  return normalise(counts);
};

export default countGrams;
