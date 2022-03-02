Array.prototype.sameStructureAs = function (other) {
  // Return 'true' if and only if 'other' has the same
  // nesting structure as 'this'.
  // Note: You are given a function isArray(o) that returns
  // whether its argument is an array.
  return this === other;
};

const testArray = (arr) => {
  return arr.some((value) => Array.isArray(value));
};

testArray([1, 2]);
testArray([1, 2, [0, 1]]);
