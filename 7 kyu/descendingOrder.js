function descendingOrder(n) {
  return Number(
    Array.from(String(n))
      .sort((a, b) => b - a)
      .join("")
  );
}
descendingOrder(123456789);
