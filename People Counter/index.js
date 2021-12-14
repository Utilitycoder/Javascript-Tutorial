// document.getElementById("count-el").innerText = 5

// Create a variable for the html element
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(countEl)

// Create a function to change the content of the html element

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

// create a save function to save the counter.
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr   // innerText is the same thing with textContent but can hide non-human readable content
    // return increment value to Zero and start counting afresh
    countEl.textContent = 0
    count = 0
}