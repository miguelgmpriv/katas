const dirKey = {
  NORTH: 1,
  SOUTH: -1,
  EAST: 100,
  WEST: -100,
};

function dirReduc(arr, unique = false) {
  if (unique) {
    return arr;
  }
  const newDirArr = arr.reduce((total, currDir, index, dirKeyArr) => {
    if (total.includes("pass"))
      return total.filter((value) => value !== "pass");
    if (dirKey[currDir] + dirKey[dirKeyArr[index + 1]] === 0)
      return [...total, "pass"];

    return [...total, currDir];
  }, []);
  return newDirArr.length === arr.length
    ? dirReduc(newDirArr, true)
    : dirReduc(newDirArr, false);
}

//dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]);

dirReduc([
  "NORTH",
  "SOUTH",
  "WEST",
  "EAST",
  "NORTH",
  "SOUTH",
  "NORTH",
  "NORTH",
  "NORTH",
  "EAST",
  "WEST",
  "NORTH",
  "SOUTH",
  "WEST",
  "EAST",
]);
