function getCount(str) {
  //var vowelsCount = 0;

  // enter your majic here

  return str.trim() === "" ? 0 : str.match(/aeiou/gi);
}

getCount("abracadabra");
