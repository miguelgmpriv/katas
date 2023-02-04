function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function () {
    return this.name;
  };
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  const first = fighter1.name === firstAttacker ? fighter1 : fighter2;
  const second = fighter1.name === firstAttacker ? fighter2 : fighter1;
  do {
    second.health -= first.damagePerAttack;
    if (second.health <= 0) return first.name;
    first.health -= second.damagePerAttack;
    if (first.health <= 0) return second.name;
  } while (true);
}

declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4));
