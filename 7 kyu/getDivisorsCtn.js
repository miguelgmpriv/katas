function getDivisorsCnt(n) {
  let total = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      if (n / i === i) {
        total = total + 1;
      } else {
        total = total + 2;
      }
    }
  }
  return total;
}
getDivisorsCnt(54);
