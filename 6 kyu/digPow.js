function digPow(n, p) {
  return [...n.toString()]
    .map(Number)
    .map((digit, index) => (index === 0 ? p : p++) && digit ** p)
    .reduce((total, num, index, arr) => {
      total += num;
      if (index === arr.length - 1) {
        return total % n === 0 ? total / n : -1;
      }
      return total;
    }, 0);
}

digPow(46288, 3);
