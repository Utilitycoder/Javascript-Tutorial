// Created DOM variables
let inputEl=document.getElementById("input-el")
let pass1El=document.getElementById("pass");
let pass2El=document.getElementById("pass2-el");
let pass3El=document.getElementById("pass3-el");
let pass4El=document.getElementById("pass4-el");

// function that generates password based on input on click
function generatePassword(){
    let passwordLength=inputEl.value // saved input value into password length

    // Display the password generated to the frontend
    pass1El.textContent = randomPasswordGenerator(passwordLength);
    pass2El.textContent = randomPasswordGenerator(passwordLength);
    pass3El.textContent = randomPasswordGenerator(passwordLength);
    pass4El.textContent = randomPasswordGenerator(passwordLength);
    // function GenPass() {
    //     inputGenral1 = "";
    //     inputGenPass1.value = GenerateNum()
    //     inputGenral1 = "";
    //     inputGenPass2.value = GenerateNum()
    //     inputGenral1 = "";
    //     inputGenPass3.value = GenerateNum()
    //     inputGenral1 = "";
    //     inputGenPass4.value = GenerateNum()
    // }
 
   
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


 pass1El.onclick = function() {
    this.select();
    document.execCommand('copy');
    alert('Password copy to clipboard Succesfully');
}

// document.getElementById("InputGenPass2").onclick = function() {
//     this.select();
//     document.execCommand('copy');
//     alert('Password copy to clipboard Succesfully');
// }
// document.getElementById("InputGenPass3").onclick = function() {
//     this.select();
//     document.execCommand('copy');
//     alert('Password copy to clipboard Succesfully');
// }
// document.getElementById("InputGenPass4").onclick = function() {
//     this.select();
//     document.execCommand('copy');
//     alert('Password copy to clipboard Succesfully');
// }
