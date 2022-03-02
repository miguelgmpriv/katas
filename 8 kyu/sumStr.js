function sumStr(a, b) {
  const turnToNumber = (str) => (Number(str) ? Number(str) : 0);
  return String(turnToNumber(a) + turnToNumber(b));
}

console.log(sumStr("", ""));
