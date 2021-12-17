let firstCard = 10
let secondCard = 8
let sum = firstCard + secondCard

// The logic of the game

/* if.....else statement is a conditional statement that 
says execute A if condition A is true. otherwise execute B
*/


if (sum < 21) {
    console.log("Do you want to draw a new Card?")
} else if (sum === 21) {  //using triple equal signs is more stricter than double
    console.log("Wohoo! You've got Blackjack")

    // I can use "else {} instead. 
} else if (sum > 21) {
    console.log("You're out of the game")
}