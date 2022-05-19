var charSets = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numeric: '0123456789',
  special: ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
};
var charset;
var lc;
var uc;
var num;
var sc;
var pwd = "";
var len;
var charSet;
var char;


// Query selectors
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");
var resetBtn = document.querySelector("#reset");
var passwordText = document.querySelector("#password");



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copypwd);
resetBtn.addEventListener("click", resetpwd);




// Function to Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}



// Function to  Copy password to clipboard
function copypwd() {
  /* Get the text field */
  var copyText = document.getElementById("password");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  
  /* Alert the copied text */
  alert("Password copied.");
}



// Function to  Reset textarea
function resetpwd(){
  var resetText = document.getElementById("password");
  resetText.value = "";
  pwd = "";
  return;
}



// Function to generate password

function generatePassword(){
  var str = prompt("Please enter the length required. /n The password length should be between 8 to 128 characters.");
  len = parseInt(str,10);
  if (len < 8 || len > 128) {
    alert("The password length must be between 8 and 128 characters.");
    return;
  } else {
    // character selectors(){
      uc = confirm("Do you want to include UPPERCASE letters?");
      lc = confirm("Do you want to include lowercase letters?");
      num = confirm("Do you want to include numbers?");
      sc = confirm("Do you want to inlcude special characters");
    // }
    if((uc || lc || sc || num) == false){
      alert("Atleast one type of character has to be selected from : /n UPPERCASE /n lowercase /n special characters ($, @, #, <, >, +, =, etc.");
      return;
    } else{

      // creating character set based on earlier selection
      if(uc == true){
        charset = charSets.uppercase;
      }
      if(lc == true){
        charset = charset + charSets.lowercase;
      }
      if(num ==true){
        charset = charset + charSets.numeric;
      }
      if(sc == true){
        charset = charset + charSets.special;
      }
      
      charSet = Object.values(charset);

      // Random selection of characters from the character set created earlier
      for(var i = 0; i< len; i++){
      pwd = pwd + charSet[Math.floor(Math.random() * charSet.length)];
      }
      return pwd; 
    }
  }
}