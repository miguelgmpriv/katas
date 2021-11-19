/* Couldnt use this solution as node 10 doesnt have flat
snail = function (array, result = []) {
  const arrLength = array.length;
  if (arrLength <= 1) return result.concat(array).flat();

  const topArray = array.slice(0, 1).flat();
  const lastArray = array.slice(-1).flat().reverse();

  if (arrLength === 2) return result.concat(topArray, lastArray).flat();

  const innerArrays = array.slice(1, -1);
  const sideElementsRight = [];
  const sideElementsLeft = [];
  innerArrays.forEach((element) => {
    sideElementsLeft.push(element.pop());
    sideElementsRight.push(element.shift());
  });
  const finalArray = result
    .concat(topArray, sideElementsLeft, lastArray, sideElementsRight.reverse())
    .flat();
  return snail(innerArrays, finalArray);
}; */
snail = function (array, result = []) {
  const arrLength = array.length;
  if (arrLength <= 1) return [].concat(...result, ...array);

  const topArray = [].concat(...array.slice(0, 1));
  const lastArray = [].concat(...array.slice(-1)).reverse();

  if (arrLength === 2) return result.concat(...topArray, ...lastArray);

  const innerArrays = array.slice(1, -1);
  const sideElementsRight = [];
  const sideElementsLeft = [];
  innerArrays.forEach((element) => {
    sideElementsLeft.push(element.pop());
    sideElementsRight.push(element.shift());
  });
  const finalArray = result.concat(
    ...topArray,
    ...sideElementsLeft,
    ...lastArray,
    ...sideElementsRight.reverse()
  );
  return snail(innerArrays, finalArray);
};
console.log(
  snail([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ])
);
snail([
  [1, 2, 3, 4, 5, 6],
  [20, 21, 22, 23, 24, 7],
  [19, 32, 33, 34, 25, 8],
  [18, 31, 36, 35, 26, 9],
  [17, 30, 29, 28, 27, 10],
  [16, 15, 14, 13, 12, 11],
]);
snail([
  [1, 2],
  [3, 4],
]);
snail([
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
]);
snail([[]]);
