function towerBuilder(nFloors, pyramid = [], currentFloor = nFloors) {
  if (pyramid.length === nFloors) return pyramid.reverse();
  const stars = "*".repeat(currentFloor * 2 - 1);
  const totalWhiteSpace = nFloors * 2 - 1 - stars.length;
  const whiteSpace = " ".repeat(totalWhiteSpace / 2);
  const floor = whiteSpace.concat(stars).concat(whiteSpace);
  pyramid.push(floor);
  return towerBuilder(nFloors, pyramid, currentFloor - 1);
}
console.log(towerBuilder(6));
