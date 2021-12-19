let firstCard = 10
let secondCard = 8
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false // check if a gamer wins
let isAlive = true // Check whether a gamer is still in the game.
let message = "" // store the result of gamers game.
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// The logic of the game

/* if.....else statement is a conditional statement that 
says execute A if condition A is true. otherwise execute B
*/

// A start game function that allows users to start the game
function startGame() {
    renderGame()
}


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
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
}

// create a new card function
function newCard() {
    let card = 6
    sum += card
    cards.push(card)
    startGame()
}