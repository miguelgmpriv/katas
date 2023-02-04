function duplicateCount(text) {
  return Object.entries(
    text
      .toLowerCase()
      .split("")
      .reduce((uniqueSet, letter) => {
        if (!uniqueSet[letter]) {
          uniqueSet[letter] = 0;
        }
        uniqueSet[letter]++;
        return uniqueSet;
      }, {})
  ).filter((pair) => pair[1] > 1).length;
}
duplicateCount("Indivisibilities");
