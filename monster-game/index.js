import characterData from "./data.js";
import Character from "./Character.js";

let monstersArray = ["orc", "demon", "goblin"];
let isWaiting = false;
// let confe = document.getElementById("my-canvas");
// var confettiSettings = { target: confe };
// var confetti = new ConfettiGenerator(confettiSettings);
// confetti.render();

// Returns a monster from monstersArray
function getNewMonster() {
  const nextMonsterData = characterData[monstersArray.pop()]; // Value is the
  return nextMonsterData ? new Character(nextMonsterData) : {};
}

// Attack Function controls the major logic of the game.
function attack() {
  if (!isWaiting) {
    wizard.setDiceHtml(); // Display current state of wizard
    monster.setDiceHtml(); // Display current state of monster
    wizard.takeDamage(monster.currentDiceScore); // Minus total of monster returned dice from wizard
    monster.takeDamage(wizard.currentDiceScore); // Minus total of wizard returned dice from monster
    render(); // Render new state to the DOM

    if (wizard.dead) {
      endGame();
    } else if (monster.dead) {
      isWaiting = true;
      if (monstersArray.length > 0) {
        setTimeout(() => {
          monster = getNewMonster();
          render();
          isWaiting = false;
        }, 1500);
      } else {
        endGame();
      }
    }
  }
}

function endGame() {
  isWaiting = true;
  const endMessage =
    wizard.health === 0 && monster.health === 0
      ? "No victors - all creatures are dead"
      : wizard.health > 0
      ? "The Wizard Wins"
      : "The monsters are Victorious";

  const endEmoji = wizard.health > 0 ? "🔮" : "☠️";
  setTimeout(() => {
    document.body.innerHTML = lastPage()`
                <div class="end-game">
                    <h2>Game Over</h2> 
                    <h3>${endMessage}</h3>
                    <p class="end-emoji">${endEmoji}</p>
                </div>
                `;
  }, 1500);
}

document.getElementById("attack-button").addEventListener("click", attack);

function render() {
  document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
  document.getElementById("monster").innerHTML = monster.getCharacterHtml();
}

const wizard = new Character(characterData.hero);
let monster = getNewMonster();
render();
