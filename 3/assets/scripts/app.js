let defaultHP = 100;

let maxLife = prompt('write HP');

let damage = 10;

let dobleDamage = 20;

let bonusLife = true;

let log = [];

let healValue = 15;

if (isNaN(maxLife) || maxLife <= 0) {  // isNaN - возвращает true если переданное значение не является числом
        maxLife = defaultHP;
    };

adjustHealthBars(maxLife);

let monsterHP = monsterHealthBar.value;

let playerHP = playerHealthBar.value;

function attack() {
    monsterHP = monsterHP - applyMonsterDamage(damage);
    playerHP = playerHP - applyPlayerDamage(damage);

    log.push([`Атака: Здоровье монстра - ${monsterHP}(урон - ${applyMonsterDamage(damage)}), Ваше Здоровье - ${playerHP}(урон - ${applyPlayerDamage(damage)})`])

    gameEndCheck();
}

function strongAttack() {
    monsterHP = monsterHP - applyMonsterDamage(dobleDamage);
    playerHP = playerHP - applyPlayerDamage(damage);

    log.push([`Сильная атака: Здоровье монстра - ${monsterHP}(урон - ${applyMonsterDamage(dobleDamage)}), Ваше Здоровье - ${playerHP}(урон - ${applyPlayerDamage(damage)})`]);

    gameEndCheck();
}

function healing() {
    playerHP = playerHP - applyPlayerDamage(damage);
    playerHP = playerHP + increasePlayerHealth(healValue);

    log.push([`Лечение: Здоровье монстра - ${monsterHP}(урон - ${0}), Ваше Здоровье - ${playerHP}(урон - ${applyPlayerDamage(damage)}, лечение - ${increasePlayerHealth(healValue)})`]);

    gameEndCheck();
}

function gameEndCheck() {
    if (playerHP <= 0 && bonusLife) {
        bonusLife = false;
        removeBonusLife();
        setPlayerHealth(maxLife);
        playerHP = playerHealthBar.value;
        alert("you almost died but bonus life saved you");

        log.push([`Потрачена дополнительная жизнь: Здоровье монстра - ${monsterHP}, Ваше Здоровье - ${playerHP}`]);

            if (monsterHP <= 0) {
                alert("you win");
                log.push([`Вы выиграли`]);
            }        
    } else if (playerHP <= 0 && monsterHP <= 0) {
        alert("draw");
        log.push([`Ничья`]);
    } else if (monsterHP <= 0) {
        alert("you win");
        log.push([`Вы выиграли`]);
    } else if (playerHP <= 0) {
        alert("you lose");
        log.push([`Вы проиграли`]);
    }
}

function showLog() {
    console.log(log);
}

attackBtn.addEventListener('click', attack);
strongAttackBtn.addEventListener('click', strongAttack);
healBtn.addEventListener('click', healing);
logBtn.addEventListener('click',showLog);