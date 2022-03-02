function squareDigits(num) {
  return Number([...String(num)].map((value) => Number(value) ** 2).join(""));
}
