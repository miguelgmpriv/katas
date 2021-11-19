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
