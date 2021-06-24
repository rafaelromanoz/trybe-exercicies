const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const damageDragon = (battleMembers) => {
  let dano = battleMembers.dragon.strength;
  dano = Math.floor(Math.random() * (dano - 15) + 15);
  return dano;
};
damageDragon(battleMembers);

const damageWarrior = (battleMembers) => {
  let strng = battleMembers.warrior.strength;
  let damageMax = strng * battleMembers.warrior.weaponDmg;
  damageMax = Math.floor(Math.random() * (damageMax - strng) + strng);
  return damageMax;
};
damageWarrior(battleMembers);

const damageAndManaMage = (battleMembers) => {
  let intelig = battleMembers.mage.intelligence;
  let damageMage = Math.floor(
    Math.random() * (intelig - intelig * 2) + intelig
  );
  let manaMage = battleMembers.mage.mana;
  if (manaMage < 15) {
    return `Você está com baixa stamina ${manaMage}`
  }
  return damageMage;
};

console.log(damageAndManaMage(battleMembers));
