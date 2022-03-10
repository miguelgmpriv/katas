function high(x) {
  const wordArray = x.split(" ");
  const charCodeArray = wordArray
    .map((str) => [...str].map((letter) => letter.charCodeAt() - 96))
    .map((charCodeArr) =>
      charCodeArr.reduce((total, charCode) => total + charCode)
    );
  const highestScore = charCodeArray.reduce((first, second) =>
    Math.max(first, second)
  );
  return wordArray[charCodeArray.findIndex((score) => score === highestScore)];
}

high("man i need a taxi up to ubud");
