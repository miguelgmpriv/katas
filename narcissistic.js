function narcissistic(value) {
  const valueArray = Array.from(value.toString());
  const power = valueArray.length;
  const reducer = (previousValue, currentValue) =>
    previousValue + currentValue ** power;
  const answer = valueArray.reduce(reducer, 0);
  return answer === value;
}

narcissistic(1652);
