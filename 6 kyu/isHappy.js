function isHappy(n) {
  let testNum = [...n.toString()].map(Number);
  let cache = [n];
  do {
    const nextTestNum = testNum.reduce((total, num) => total + num ** 2, 0);
    if (nextTestNum === 1) return true;
    if (cache.includes(nextTestNum)) return false;
    cache.push(nextTestNum);
    testNum = [...nextTestNum.toString()].map(Number);
  } while (true);
  return;
}
isHappy(16);
