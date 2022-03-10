function findOdd(A) {
  const integerMap = [...new Set(A)].map((value) => [
    value,
    A.filter((integer) => integer === value).length,
  ]);
  return integerMap.find((arr) => arr[1] % 2 !== 0)[0];
}

findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]);
