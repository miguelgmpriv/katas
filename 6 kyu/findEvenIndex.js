function findEvenIndex(arr) {
  for (let index = 0, length = arr.length; index < length; index++) {
    const leftArr = arr.slice(0, index);
    const rightArr = arr.slice(index + 1, length);
    const reducer = (total, currentValue) => total + currentValue;
    if (leftArr.reduce(reducer, 0) === rightArr.reduce(reducer, 0))
      return index;
  }
  return -1;
}
findEvenIndex([1, 2, 3, 4, 3, 2, 1]);
