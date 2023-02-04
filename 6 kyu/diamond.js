function diamond(n) {
  if (n <= 0 || n % 2 === 0) return null;
  let spaces = n - 1;
  const diam = [];
  for (let line = 0; line < n; line++) {
    const star = n - Math.abs(spaces);
    const lineStr = `${" ".repeat(Math.abs(spaces / 2))}${"*".repeat(star)}\n`;
    diam.push(lineStr);
    spaces -= 2;
  }
  return diam.join("");
}
diamond(5);
