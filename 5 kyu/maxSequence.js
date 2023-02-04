const maxSequence = function (arr) {
  let largest = 0;
  if (arr.length === 0 || arr.every((number) => number < 0)) return largest;
  for (let index = 0; index < arr.length; index++) {
    const newArr = arr.slice(index, arr.length);
    for (let upperLimit = 1; upperLimit <= newArr.length; upperLimit++) {
      const subArr = newArr.slice(0, upperLimit);
      const subArrSum = subArr.reduce((total, num) => total + num);
      if (subArrSum > largest) largest = subArrSum;
    }
  }
  return largest;
};

maxSequence([-1, -2, -3, -4, -5]);
maxSequence([1, 2, 3, 4, 5, 6]);
