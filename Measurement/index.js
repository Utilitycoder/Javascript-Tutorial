let standardUnit = document.getElementById("unit")
let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")

let number = 20
standardUnit.textContent = number

// Solution for length
let feetResult = number * 3.28084
let meterResult = number * 0.3048
length.textContent = `${number} meters = ${feetResult.toFixed(3)} feet | 
    ${number} feet = ${meterResult.toFixed(3)} meters`
    
// Solution for Volume
let litersResult = number * 3.78541
let gallonResult = number * 0.264172
volume.textContent = `${number} liters = ${gallonResult.toFixed(3)} gallons | 
    ${number} gallons = ${litersResult.toFixed(3)} liters`
    
// Solutions for Mass
let poundsResult = number * 0.453592
let kilosResult = number * 2.20462
mass.textContent = `${number} kilos = ${kilosResult.toFixed(3)} pounds | 
    ${number} pounds = ${poundsResult.toFixed(3)} kilos`

