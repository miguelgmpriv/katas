function isIsogram(str) {
  const uniqueLetters = new Set(str.toLowerCase().split(""));
  return str.length === uniqueLetters.size;
}

isIsogram("Dermatoglyphics");
