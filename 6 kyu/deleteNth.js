function deleteNth(arr, n) {
  const numbersMap = new Map();
  const cleanedArray = arr.reduce((newArr, curr) => {
    if (!numbersMap.has(curr)) numbersMap.set(curr, 0);
    if (numbersMap.get(curr) < n) {
      numbersMap.set(curr, numbersMap.get(curr) + 1);
      newArr.push(curr);
    }
    return newArr;
  }, []);
  return cleanedArray;
}

deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 2);
