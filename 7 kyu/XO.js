/* function XO(str) {
  const matches = str.toLowerCase().match(/[xo]/gi);
  const total = matches
    ? matches.reduce(
        (obj, match) => {
          // eslint-disable-next-line no-plusplus
          obj[match]++;
          return obj;
        },
        { x: 0, o: 0 }
      )
    : { x: 0, o: 0 };
  return total.x === total.o;
} */

XO = (s) => (s += "xo").match(/x/gi).length === s.match(/o/gi).length;
XO("xxOo");
