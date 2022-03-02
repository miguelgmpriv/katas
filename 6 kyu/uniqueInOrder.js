const uniqueInOrder = function (iterable) {
  return Array.from(iterable).reduce(
    (arrayList, value) =>
      arrayList[arrayList.length - 1] === value
        ? arrayList
        : arrayList.concat(value),
    []
  );
};
uniqueInOrder("AAAABBBCCDAABBB");
