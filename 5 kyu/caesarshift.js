// Todo - split string into 5 parts and store in an array

function movingShift(s, shift) {
  const regex = /([A-Z\s])/gi;
  let counter = shift;
  const upperCaseShift = (intToMove) =>
    intToMove <= 90 ? intToMove : 65 + (intToMove - 90);
  const lowerCaseShift = (intToMove) =>
    intToMove <= 122 ? intToMove : 97 + (intToMove - 122);
  const replacer = (matchedChar) => {
    const originalCode = matchedChar.charCodeAt(0);
    const newCode = originalCode + (counter % 26);
    counter += 1;
    if (originalCode === 32) return String.fromCharCode(originalCode);
    return originalCode === 90
      ? String.fromCharCode(upperCaseShift(newCode))
      : String.fromCharCode(lowerCaseShift(newCode));
  };
  return s.replace(regex, replacer);
}
movingShift(
  "I should have known that you would have a perfect answer for me!!!",
  1
);
function demovingShift(arr, shift) {
  return "";
}
