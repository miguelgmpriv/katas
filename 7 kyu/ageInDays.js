function ageInDays(year, month, day) {
  return `You are ${Math.floor(
    (Date.now() - new Date(year, month - 1, day)) / 86400000
  )} days old`;
}

ageInDays(2015, 11, 1);
