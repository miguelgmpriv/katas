function isPrime(num) {
  if (num <= 0 || num === 1) return false;
  if (num === 2 || num === 5) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  let count = 5;

  while (count ** 2 <= num) {
    if (num % count === 0 || num % (count + 2) === 0) return false;

    count += 6;
  }

  return true;
}

function removeNb(n) {
  const sumToFactor = (n * (n + 1)) / 2 + 1;
  if (isPrime(sumToFactor)) return [];
  let counter = 2;
  const result = [];
  while (counter < n) {
    if (sumToFactor % counter === 0 && sumToFactor / counter < n) {
      result.push([counter - 1, sumToFactor / counter - 1]);
    }
    // eslint-disable-next-line operator-assignment
    counter = counter + 1;
  }
  return result;
}
removeNb(26);
