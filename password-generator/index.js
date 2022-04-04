


function generatePassword(){
    let inputEl=document.getElementById("input-el")
    let passwordLength=inputEl.value
 
    let pass1El=document.getElementById("pass1-el");
    let pass2El=document.getElementById("pass2-el");
    let pass3El=document.getElementById("pass3-el");
    let pass4El=document.getElementById("pass4-el");
 
    
    
    pass1El.textContent=randomPasswordGenerator(passwordLength);
    pass2El.textContent=randomPasswordGenerator(passwordLength);
    pass3El.textContent=randomPasswordGenerator(passwordLength);
    pass4El.textContent=randomPasswordGenerator(passwordLength);
 
   
 }
 
 function randomPasswordGenerator(passwordLength){
     var pass = "";
     var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"+
               "abcdefghijklmnopqrstuvwxyz"+
               "0123456789"+"@#$";
    
    for(let i=0;i<passwordLength;i++){
       let randomNumber=Math.floor(Math.random() * str.length)
       pass+=str[randomNumber];
     }
     return pass;
 }