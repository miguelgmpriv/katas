function productFib(prod) {
  const cached = {};
  const notFound = true;
  let count = 0;
  function fib(number) {
    if (number in cached) return cached[number];
    if (number === 1) return 1;
    if (number <= 0) return 0;
    cached[number] = fib(number - 1) + fib(number - 2);
    return cached[number];
  }
  while (notFound) {
    const firstFib = fib(count);
    const secondFib = fib(count + 1);
    const result = firstFib * secondFib;
    if (result === prod) return [firstFib, secondFib, true];
    if (result > prod) return [firstFib, secondFib, false];
    count += 1;
  }
}
function tribonacci(signature, n) {
  const cached = {};
  const [first, second, third] = signature;
  const numberArr = [...signature];
  function fib(number) {
    if (number in cached) return cached[number];
    if (number === 2) return third;
    if (number === 1) return second;
    if (number <= 0) return first;
    cached[number] = fib(number - 1) + fib(number - 2) + fib(number - 3);
    return cached[number];
  }
  fib(n - 1);
  for (const [key, value] of Object.entries(cached)) {
    numberArr.push(value);
  }
  return numberArr;
}

console.log(tribonacci([1, 1, 1], 10));
