function order(words) {
  const wordsArray = words.split(" ");
  let result = [];
  for (let counter = 1; counter <= wordsArray.length; counter++) {
    for (const word of wordsArray) {
      if (word.includes(counter)) {
        result.push(word);
        break;
      }
    }
  }

  return result.join(" ");
}

order("is2 Thi1s T4est 3a");
