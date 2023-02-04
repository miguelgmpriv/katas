function queueTime(customers, n) {
  if (n === 1) return customers.reduce((total, num) => total + num);
  if (n >= customers.length) return customers.reduce((a, b) => Math.max(a, b));
  function getTotal() {
    const cache = {};
    return function findTotal(list) {
      if (list.length in cache) return cache[list.length];
      cache[list.length] = list.reduce((total, num) => total + num);
      return cache[list.length];
    };
  }
  const test = customers.reduce((tills, customer, index) => {
    if (tills.length < n) {
      tills[index] = [...customer];
      return tills;
    }
    return tills;
  }, {});
  return test;
}

queueTime([1, 2, 3, 4, 5], 100);
