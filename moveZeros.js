// eslint-disable-next-line no-var
var moveZeros = function (arr) {
  const arrLength = arr.length;
  const filtered = arr.filter((value) => value !== 0);
  for (let counter = filtered.length; counter < arrLength; counter++) {
    filtered.push(0);
  }
  return filtered;
};
moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]);
