// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseArr = ["abcdefghijklmnopqrstuvwxyz"];
var uppercaseArr = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numericArr = ["01234567890"];
var specialArr = [" !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"];
var length;
var lowercase;
var uppercase;
var numeric;
var special;
var resultArr;
var result="";
var rand;
var targetArr;
var checkArr;
var isFirstClick = true;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // passwordText.value = password;
  passwordText.textContent = result;
}

function generatePassword() {
  if (isFirstClick) {
    userChoice();
    passwordArray();
    characterSelection();
    isFirstClick = false;
    console.log(isFirstClick);
  } else {
      characterSelection();
  };
}

//This function collects user's input on length and character selection criteria and write to five variables, length, lowercase, uppercase, numeric, and special, respectively
function userChoice(){
  var isFirstRun = true;
  do {
    length = window.prompt("Enter length (8-128)");
  } while (parseInt(length) < 8 || parseInt(length) > 128);
  // while (parseInt(length) < 8 || parseInt(length) > 128 || isNaN(parseInt(length)));
  do {
    if(isFirstRun) {
      charChoice();
      isFirstRun = false;
    } else {
      window.alert("Please make sure you select at least one type of character for your password!");
      charChoice();
    }
  } while (lowercase+uppercase+numeric+special === "nnnn");
}

//This function collects user's character selection criteria specifically
function charChoice(){
  do {
    lowercase = window.prompt("Include lowercase characters? (y or n)").toLowerCase();
  } while (lowercase !== "y" && lowercase !== "n");
  do {
    uppercase = window.prompt("Include uppercase characters? (y or n)").toLowerCase();
  } while (uppercase !== "y" && uppercase !== "n");
  do {
    numeric = window.prompt("Include numeric characters? (y or n)").toLowerCase();
  } while (numeric !== "y" && numeric !== "n");
  do {
    special = window.prompt("Include special characters? (y or n)").toLowerCase();
  } while (special !== "y" && special !== "n");
}

//Generate an array for selected charater categories
function passwordArray() {
  if(lowercase==="n"){
    lowercaseArr="";
  };
  if(uppercase==="n"){
    uppercaseArr="";
  };
  if(numeric==="n"){
    numericArr="";
  };
  if(special==="n"){
    specialArr="";
  }
  resultArr=[...lowercaseArr, ...uppercaseArr, ...numericArr, ...specialArr].filter(Boolean);
}

function characterSelection() {
  do {
    result="";
    checkArr = [...resultArr];
    for(var i=0; i<length; i++){
      rand = Math.floor(Math.random()*resultArr.length);
      targetArr = resultArr[rand];
      result += targetArr.charAt(Math.floor(Math.random()*targetArr.length));
      checkArr[rand] = "";
    };
  } while (checkArr.filter(Boolean).length !== 0);
}

//reset all the variables to default value so user can generate multiple passwords by clicking on the button


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
