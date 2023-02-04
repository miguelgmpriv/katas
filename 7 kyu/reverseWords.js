function reverseWords(str) {
  const test = str
    .match(/([\S])+/gi)
    .map((word) => word.split("").reverse().join(""));
  const test1 = str.replace(/([\S])+/gi, (word) =>
    word.split("").reverse().join("")
  );
  return test1;
}

reverseWords("The quick brown fox jumps over the lazy dog.");
