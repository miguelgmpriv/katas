function swap(str) {
  return [...str]
    .map((letter) => {
      return /[a-z]/.test(letter) ? letter.toUpperCase() : letter.toLowerCase();
    })
    .join("");
}

swap("HelloWorld");
