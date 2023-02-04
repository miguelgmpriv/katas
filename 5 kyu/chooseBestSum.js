function chooseBestSum(t, k, ls) {
  const allPossibleArrays = [];
  function findAllArrays(newArr, curArr, newMaxSize) {
    if (newMaxSize === 0) allPossibleArrays.push(newArr);
    for (let index = 0; index < curArr.length; index++) {
      findAllArrays(
        [...newArr, curArr[index]],
        curArr.slice(index + 1),
        newMaxSize - 1
      );
    }
  }
  findAllArrays([], ls, k);
  return allPossibleArrays;
}
chooseBestSum(163, 3, [50, 55, 57, 58, 60]);

const bestSum = (t, k, ls) =>
  ls.reduce(
    (pre, val) => [
      ...pre,
      ...pre.filter((val) => val.length < k).map((v) => [...v, val]),
    ],
    [[]]
  );

bestSum(163, 3, [50, 55, 57, 58, 60]);

const test = (distance, towns, options) => {
  options.reduce(
    (list, value) => [...list, ...list.map((prior) => [value, ...prior])],
    [[]]
  );
};

test(163, 3, [50, 55, 57, 58, 60]);
