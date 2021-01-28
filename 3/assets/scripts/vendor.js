const monsterHealthBar = document.getElementById('monster-health');
const playerHealthBar = document.getElementById('player-health');
const bonusLifeEl = document.getElementById('bonus-life');

const attackBtn = document.getElementById('attack-btn');
const strongAttackBtn = document.getElementById('strong-attack-btn');
const healBtn = document.getElementById('heal-btn');
const logBtn = document.getElementById('log-btn');

function adjustHealthBars(maxLife) {
  monsterHealthBar.max = maxLife;
  monsterHealthBar.value = maxLife;
  playerHealthBar.max = maxLife;
  playerHealthBar.value = maxLife;
}

function applyMonsterDamage(damage) {
  const appliedDamage = Math.random() * damage;
  monsterHealthBar.value = +monsterHealthBar.value - appliedDamage;
  return appliedDamage;
}

function applyPlayerDamage(damage) {
  const appliedDamage = Math.random() * damage;
  playerHealthBar.value = +playerHealthBar.value - appliedDamage;
  return appliedDamage;
}

function increasePlayerHealth(healValue) {
  playerHealthBar.value = +playerHealthBar.value + healValue;
}

function resetGame(value) {
  playerHealthBar.value = value;
  monsterHealthBar.value = value;
}

function removeBonusLife() {
  bonusLifeEl.parentNode.removeChild(bonusLifeEl);
}

function setPlayerHealth(health) {
  playerHealthBar.value = health;
}


function applyMonsterDoubleDamage(dobleDamage) {
  const appliedDamage = Math.random() * dobleDamage;
  playerHealthBar.value = +playerHealthBar.value - appliedDamage;
  return appliedDamage;
}