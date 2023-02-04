function countBy(x, n) {
  return Array(n)
    .fill(0)
    .map((_, index) => (index + 1) * x);
}

countBy(2, 5);
