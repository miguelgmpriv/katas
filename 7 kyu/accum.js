function accum(s) {
  return Array.from(s.toUpperCase())
    .map((letter, index) => letter.padEnd(index + 1, letter.toLowerCase()))
    .join("-");
}
accum("ZpglnRxqenU");
