const cardRank = {
  A: 0,
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  6: 5,
  7: 6,
  8: 7,
  9: 8,
  T: 9,
  J: 10,
  Q: 11,
  K: 12,
};

const symbolRank = {
  c: 0,
  d: 1,
  h: 2,
  s: 3,
};

const sizeOfSuit = Object.keys(cardRank).length;

function encode(input) {
  return input
    .map((card) => cardRank[card[0]] + sizeOfSuit * symbolRank[card[1]])
    .sort((a, b) => a - b);
}

function decode(input) {
  return input
    .sort((a, b) => a - b)
    .map((code) => {
      const symbolCode = Object.keys(symbolRank).find(
        (key) => symbolRank[key] === Math.floor(code / sizeOfSuit)
      );
      const cardCode = Object.keys(cardRank).find(
        (key) => cardRank[key] === code - sizeOfSuit * symbolRank[symbolCode]
      );
      return cardCode + symbolCode;
    });
}
encode(["5h", "7c", "Qh", "Qs", "Ad"]);
decode([7, 22, 51]);
decode([50, 6, 13, 30, 37]);
