function longestConsec(strarr, k) {
  const strArrSize = strarr.length;
  if (strArrSize === 0 || k > strArrSize || k <= 0) return "";
  const strArrJoined = [];
  const concatStrings = (value, index) => {
    let newString = value;
    for (let counter = 1; counter < k; counter++) {
      const indexToAdd = index + counter;
      if (indexToAdd > strArrSize - 1) break;
      newString = newString + strarr[indexToAdd];
    }
    return newString;
  };
  strarr.forEach((element, index) => {
    strArrJoined.push(concatStrings(element, index));
  });
  let longest = 0;
  strArrJoined.forEach((element) => {
    if (element.length > longest) return (longest = element.length);
  });

  return strArrJoined.find((element) => element.length === longest);
}

longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3);
