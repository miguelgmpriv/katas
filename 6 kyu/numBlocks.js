function numBlocks(w, l, h) {
  let result = 0n;
  for (
    let newL = l, newW = w, counter = 0;
    counter < h;
    newL++, newW++, counter++
  ) {
    result += newL * newW;
  }
  return result;
}
numBlocks(1n, 10n, 10n);
