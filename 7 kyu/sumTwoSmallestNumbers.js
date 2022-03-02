function sumTwoSmallestNumbers(numbers) {
  return numbers.sort((a, b) => a - b) && numbers[0] + numbers[1];
}

sumTwoSmallestNumbers([19, 5, 42, 2, 77]);
