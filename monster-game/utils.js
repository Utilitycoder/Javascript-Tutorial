// Create a new array of length diceCount, fill it with 0 and then map over the array to return random numbers
function getDiceRollArray(diceCount) {
  return new Array(diceCount)
    .fill(0)
    .map(() => Math.floor(Math.random() * 6) + 1);
}

const getPercentage = (remainingHealth, maximumHealth) =>
  (100 * remainingHealth) / maximumHealth;

function getDicePlaceholderHtml(diceCount) {
  return new Array(diceCount)
    .fill(0)
    .map(
      () =>
        //fill the new array created with 0 and map it
        `<div class="placeholder-dice"></div>`
    )
    .join("");
}

export { getDiceRollArray, getDicePlaceholderHtml, getPercentage };
