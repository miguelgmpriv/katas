function score(dice) {
  const ones = (arr) => {
    const totalOnes = arr.filter((value) => value === 1).length;
    if (totalOnes === 0) return 0;
    if (totalOnes > 3) return 1000 + (arr.length - totalOnes) * 100;
    return totalOnes === 3 ? 1000 : totalOnes * 100;
  };
  const twos = (arr) => {
    return arr.filter((value) => value === 2).length >= 3 ? 200 : 0;
  };
  const threes = (arr) => {
    return arr.filter((value) => value === 3).length >= 3 ? 300 : 0;
  };
  const fours = (arr) => {
    return arr.filter((value) => value === 4).length >= 3 ? 400 : 0;
  };
  const fives = (arr) => {
    const totalFives = arr.filter((value) => value === 5).length;
    if (totalFives === 0) return 0;
    if (totalFives > 3) return 500 + (arr.length - totalFives) * 50;
    return totalFives === 3 ? 500 : totalFives * 50;
  };
  const sixes = (arr) => {
    return arr.filter((value) => value === 6).length >= 3 ? 600 : 0;
  };
  const result =
    ones(dice) +
    twos(dice) +
    threes(dice) +
    fours(dice) +
    fives(dice) +
    sixes(dice);
  return result;
}

score([2, 2, 2, 6, 2]);
score([4, 4, 4, 3, 3]);
score([3, 3, 3, 5, 4]);
