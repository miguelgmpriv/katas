function encrypt(text, n) {
  if (n <= 0 || text == null) return text;
  const textArray = Array.from(text);
  const sortedArrayEven = textArray.filter((element, index) => index % 2 === 0);
  const sortedArrayOdd = textArray.filter((element, index) => index % 2 !== 0);
  const result = sortedArrayOdd.concat(sortedArrayEven).join("");
  return encrypt(result, --n);
}
function decrypt(encryptedText, n) {
  if (n <= 0 || encryptedText == null) return encryptedText;
  const textLength = encryptedText.length;
  const textArray = Array.from(encryptedText);
  const firstHalf =
    textLength % 2 === 0
      ? textArray.slice(0, textLength / 2)
      : textArray.slice(0, Math.floor(textLength / 2));
  const secondHalf =
    textLength % 2 === 0
      ? textArray.slice(-(textLength / 2))
      : textArray.slice(-Math.ceil(textLength / 2));
  let result = "";
  for (let index = 0; index < secondHalf.length; index++) {
    if (firstHalf[index] == null) {
      result = result + secondHalf[index];
      break;
    }
    result = result + secondHalf[index] + firstHalf[index];
  }
  return decrypt(result, --n);
}
