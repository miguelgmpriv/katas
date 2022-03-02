function printerError(s) {
  const found = s.match(/[n-z]/gi);
  return `${found === null ? 0 : found.length}/${s.length}`;
}

printerError("12313");
