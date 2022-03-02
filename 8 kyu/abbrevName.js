function abbrevName(name) {
  return name
    .toUpperCase()
    .split(" ")
    .reduce((initials, names) => initials.concat(names[0]), [])
    .join(".");
}
abbrevName("Patrick Feenan");
