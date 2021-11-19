function greatestCommonDivisor(intA, intB) {
  const largest = Math.max(intA, intB);
  const smallest = Math.min(intA, intB);
  if (smallest === 0) return largest;

  return greatestCommonDivisor(smallest, largest % smallest);
}
function lowestCommonMultiple(intA, intB) {
  return (intA / greatestCommonDivisor(intA, intB)) * intB;
}
function convertFrac(lst) {
  if (lst.toString() === "") return "";
  const denominators = lst.reduce((arr, currentValue) => {
    arr.push(currentValue.slice(-1));
    return arr;
  }, []);
  const commonDenominator = denominators.reduce((preValue, currValue) => {
    return lowestCommonMultiple(preValue, currValue);
  }, 1);
  return `(${lst
    .map((arr) => {
      const scalar = commonDenominator / arr[1];
      return arr.map((element) => element * scalar);
    })
    .join(")(")})`;
}

convertFrac([
  [1, 2],
  [1, 3],
  [1, 4],
]);
convertFrac([[[[[[[[[[]]]]]]]]]]);
