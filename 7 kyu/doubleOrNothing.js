function doubleOrNothing(cash, wager, losses) {
  let round = 1;
  let currentWager = wager;
  while (round < losses) {
    currentWager *= 2;
    round += 1;
  }
  return currentWager > cash ? `I'll pay you back later` : cash - currentWager;
}

doubleOrNothing(66, 1, 7);
