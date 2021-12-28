// declaring variables
let player = {
    name: "Lawal",
    chips: 1000
}
let cards = []
let sum = 0
let hasBlackJack = false // check if a gamer wins
let isAlive = false // Check whether a gamer is still in the game.
let message = "" // store the result of gamers game.
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")



//Display the player object.
playerEl.textContent = player.name + ": $" + player.chips


// create a function to get random number
function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

// The logic of the game

/* if.....else statement is a conditional statement that 
says execute A if condition A is true. otherwise execute B
*/

// A start game function that allows users to start the game
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

// Create a function that tell us the outcome of a round
function renderGame() {
    if (sum < 21) {
        message = "Do you want to draw a new Card?"
    } else if (sum === 21) {  //using triple equal signs is more stricter than double
        message = "Wohoo! You've got Blackjack"
        hasBlackJack = true
    
        // I can use "else {} instead. 
    } else if (sum > 21) {
        message = "You're out of the game"
        isAlive = false
    }
    
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
}

// create a new card function
function newCard() {
    // condition that makes sure only player who is still in the game can ask for a new card
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

// create a function that deducts or add to the money.
// if (hasBlackJack === true && isAlive === false) {
//     player.chips += 100
//     playerEl.textContent = player.name + ": $" + player.chips
// } else if (isAlive = false && hasBlackJack === false) {
//     player.chips -= 100
//     playerEl.textContent = player.name + ": $" + player.chips
// }