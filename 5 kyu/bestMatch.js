function bestMatch(ALAHLYGoals, zamalekGoals) {
  const matchDifference = [];
  zamalekGoals.forEach((goals, index) => {
    matchDifference.push([ALAHLYGoals[index] - goals, goals]);
  });
  const variances = matchDifference.map((match) => {
    return [match[0] - match[1], match[1]];
  });
  const smallestDifference =
    variances.length === 1
      ? variances[0][0]
      : variances.reduce((_, currMatch, currIndex, curArr) =>
          Math.min(curArr[currIndex - 1][0], currMatch[0])
        );
  const matchesWithSmallestDifference = variances.filter(
    (matchVariance) => matchVariance[0] === smallestDifference
  );
  const mostGoals =
    matchesWithSmallestDifference.length <= 1
      ? matchesWithSmallestDifference[0][1]
      : matchesWithSmallestDifference.reduce(
          (_, currMatch, currIndex, curArr) =>
            Math.max(curArr[currIndex - 1][1], currMatch[1])
        );
  return variances.findIndex(
    (variance) =>
      variance[0] === smallestDifference && variance[1] === mostGoals
  );
}
bestMatch(
  [13, 13, 13, 18, 17, 10, 13, 9, 10, 9, 10, 10, 11],
  [10, 5, 4, 9, 8, 3, 5, 2, 2, 3, 0, 1, 8]
);
