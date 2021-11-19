function sumDigPow(a, b) {
  const digPowArray = [];

  for (let value = a; value <= b; value++) {
    let counter = 0;
    const numberArray = Array.from(value.toString());
    const totalSumOfArray = numberArray.reduce((preValue, curValue) => {
      counter++;
      return preValue + Math.pow(curValue, counter);
    }, 0);
    if (totalSumOfArray === value) digPowArray.push(value);
  }
  return digPowArray;
}

sumDigPow(80, 100);
