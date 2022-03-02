function findNb(m) {
  let total = 0;
  let counter = 1;
  while (total < m) {
    total += counter ** 3;
    counter += 1;
  }
  return total === m ? counter - 1 : -1;
}

findNb(135440716410000);
