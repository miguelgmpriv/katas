function isPangram(string) {
  const alphabet = new Set(string.toLowerCase().match(/[a-z]/g));
  return alphabet.size === 26;
}

isPangram("The quick brown fox jumps over the lazy dog.");
