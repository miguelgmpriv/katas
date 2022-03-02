function rot13(message) {
  const regex = /([a-zA-Z])/g;
  const lowercaseCode = (code) => {
    return code + 13 > 122 ? 97 + (code + 13 - 123) : code + 13;
  };
  const uppercaseCode = (code) => {
    return code + 13 > 90 ? 65 + (code + 13 - 91) : code + 13;
  };
  const replacer = (match) => {
    const code = match.charCodeAt(0);
    const newCode = code <= 90 ? uppercaseCode(code) : lowercaseCode(code);
    return String.fromCharCode(newCode);
  };
  return message.replace(regex, replacer);
}

rot13("grf.g");
