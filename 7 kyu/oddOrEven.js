function oddOrEven(array) {
  return array.reduce((total, value) => total + value, 0) % 2 === 0
    ? "even"
    : "odd";
}
oddOrEven([1023, 1, 2]);
oddOrEven([]);
