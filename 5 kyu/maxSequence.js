const maxSequence = function (arr) {
  if (arr.length === 0 || arr.every((number) => number < 0)) return 0;
  let largest = 0;
  for (let index = 0; index < arr.length; index++) {
    const newArr = arr.slice(index, arr.length);
    for (let counter = 1; counter <= newArr.length; counter++) {
      const subArr = newArr.slice(index, counter);
      const subArrSum = subArr.reduce((total, num) => total + num);
      if (subArrSum > largest) largest = subArrSum;
    }
    const currentSum = newArr.reduce((total, num) => total + num);
    if (currentSum > largest) largest = currentSum;
  }
  return largest;
};

maxSequence([-1, -2, -3, -4, -5]);
maxSequence([1, 2, 3, 4, 5, 6]);
