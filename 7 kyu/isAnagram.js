const isAnagram = function (test, original) {
  if (test.length !== original.length) return false;
  const originalArray = [...original.toLowerCase()];
  let testArray = [...test.toLowerCase()];
  for (let index = 0; index < originalArray.length; index++) {
    const letter = originalArray[index];
    if (!testArray.includes(letter)) return false;
    const testIndex = testArray.findIndex((value) => value === letter);
    testArray.splice(testIndex, 1);
  }
  return true;
};
