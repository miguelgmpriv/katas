function sortArray(array) {
  const oddArrayIterator = array
    .filter((value) => value % 2 !== 0)
    .sort((a, b) => (a < b ? -1 : 1))
    .values();

  return array.reduce((arr, value) => {
    const nextValue = value % 2 !== 0 ? oddArrayIterator.next().value : value;
    arr.push(nextValue);
    return arr;
  }, []);
}
sortArray([5, 3, 2, 8, 1, 4]);
