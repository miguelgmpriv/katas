function removeSmallest(numbers) {
  if (numbers === []) return numbers;
  const smallestValue = numbers.slice(0).sort((numA, numB) => numA - numB)[0];
  const indexOfSmallest = numbers.findIndex((num) => num === smallestValue);
  const newArr = numbers
    .slice(0, indexOfSmallest)
    .concat(numbers.slice(indexOfSmallest + 1));
  return newArr;
}
removeSmallest([5, 3, 2, 1, 4]);
