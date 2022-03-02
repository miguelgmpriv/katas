function DNAStrand(dna) {
  const DNAStrings = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  return dna.replace(/[ATGC]/gi, (match) => DNAStrings[match]);
}
DNAStrand("AAAA");
