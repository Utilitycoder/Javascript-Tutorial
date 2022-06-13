import { getDiceRollArray, getDicePlaceholderHtml, getPercentage } from './utils.js'

// Set up a class 
class Character {
    constructor(data) {
        Object.assign(this, data) //Copy all info from "data" to "this" class.
        this.maxHealth = this.health
        this.diceHtml = getDicePlaceholderHtml(this.diceCount) //"this.diceCount" is coming from the info copied
    }

    // The methods in the constructor function
    setDiceHtml() {
        // Call the getDiceRollArray Method and save its return value in currentDiceScore
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        // Map over the currentDiceScore and use its value to an html element
        this.diceHtml = this.currentDiceScore.map((num) => 
            `<div class="dice">${num}</div>`).join("")
    }

    takeDamage(attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, num) =>  total + num)
        this.health -= totalAttackScore
        if (this.health <= 0) {
            this.dead = true
            this.health = 0
        }
    }

    getHealthBarHtml() {
        const percent = getPercentage(this.health, this.maxHealth)
        return `<div class="health-bar-outer">
                        <div class="health-bar-inner ${percent < 26 ? "danger" : ""}" 
                                style="width:${percent}%;">
                        </div>
                </div>`
    }



    getCharacterHtml() {
        const { elementId, name, avatar, health, diceCount, diceHtml } = this
        const healthBar = this.getHealthBarHtml()
        return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                ${healthBar}
                <div class="dice-container">
                    ${diceHtml}
                </div>
            </div>`
    }
}

export default Character