function roundToNext5(n) {
  if (n % 5 === 0) return n;
  const test = n % 5;
  return n > 0 ? n + 5 - (n % 5) : 5 + n - (n % 5);
}
roundToNext5(-1);
