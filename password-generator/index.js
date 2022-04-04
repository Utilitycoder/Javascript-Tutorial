// Created DOM variables
let inputEl=document.getElementById("input-el")
let pass1El=document.getElementById("pass1-el");
let pass2El=document.getElementById("pass2-el");
let pass3El=document.getElementById("pass3-el");
let pass4El=document.getElementById("pass4-el");

// function that generates password based on input on click
function generatePassword(){
    let passwordLength=inputEl.value // saved input value into password length

    // Display the password generated to the frontend
    pass1El.textContent=randomPasswordGenerator(passwordLength);
    pass2El.textContent=randomPasswordGenerator(passwordLength);
    pass3El.textContent=randomPasswordGenerator(passwordLength);
    pass4El.textContent=randomPasswordGenerator(passwordLength);
 
   
 }
 
//  The function that allows us to randomly generate password based on input value
 function randomPasswordGenerator(passwordLength){
     var pass = ""
     var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"+
               "abcdefghijklmnopqrstuvwxyz"+
               "0123456789"+"@#$_-*&%!";
    
    for(let i = 0; i < passwordLength; i++){
       let randomNumber=Math.floor(Math.random() * str.length)
       pass += str[randomNumber];
     }
     return pass;
 }

 function copyDivToClipboard() {
    let range = document.createRange();
    range.selectNode(document.getElementById("a"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
}