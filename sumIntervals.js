const totalSum = (arr) =>
  arr.reduce((total, pair) => {
    return total + (pair[1] - pair[0]);
  }, 0);
const compareIntervals = (pairA, pairB) => {
  return (
    (pairA[0] <= pairB[0] && pairB[0] <= pairA[1]) ||
    (pairA[0] <= pairB[1] && pairB[1] <= pairA[1])
  );
};
const combinePair = (arr) => {
  return [Math.min(...arr), Math.max(...arr)];
};

function sumIntervals(intervals, counter = 0) {
  const interLength = intervals.length;
  if (counter >= interLength - 1) return totalSum(intervals);
  const sortedIntervals = intervals.sort((pairA, pairB) =>
    pairA[0] < pairB[0] ? -1 : 1
  );
  const firstPair = sortedIntervals[counter];
  const secondPair = sortedIntervals[counter + 1];
  if (!compareIntervals(firstPair, secondPair))
    return sumIntervals(intervals, counter + 1);
  const newPair = combinePair(firstPair.concat(secondPair));
  intervals.splice(counter, 2, newPair);
  return sumIntervals(intervals, counter);
}

sumIntervals([
  [1, 4],
  [7, 10],
  [3, 5],
]);
