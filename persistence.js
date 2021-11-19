function persistence(num, counter = 0) {
  const numArray = Array.from(String(num), Number);
  if (numArray.length === 1) return counter;
  const result = numArray.reduce((preValue, curValue) => preValue * curValue);
  return persistence(result, ++counter);
}
