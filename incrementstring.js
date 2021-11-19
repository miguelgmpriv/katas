function incrementString(strng) {
  const regex = /\d+/;
  if (!strng.match(regex)) return `${strng}1`;
  const matchedString = strng.match(regex).toString();
  const matchStringLength = matchedString.length;
  const newNumber = (Number(matchedString) + 1).toString();
  const restOfString = strng.slice(0, strng.search(regex));
  return newNumber.length >= matchStringLength
    ? restOfString.concat(newNumber)
    : restOfString.concat(newNumber.padStart(matchStringLength, "0"));
}

incrementString("foobar000");
incrementString("");
incrementString("foobar");
