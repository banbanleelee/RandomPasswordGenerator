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
var selectionArr;
var result="";
var temp1;
var temp2;
var temp3;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // passwordText.value = password;
  passwordText.textContent = result;
}

function generatePassword() {
  userChoice();
  passwordArray();
  characterSelection();
}
//This function collects user's input on length and character selection criteria and write to five variables, length, lowercase, uppercase, numeric, and special, respectively
function userChoice(){
  var isFirstRun = true;
  do {
    length = window.prompt("Enter length (8-128)");
    console.log(parseInt(length));
  } while (parseInt(length) < 8 || parseInt(length) > 128);
  // while (parseInt(length) < 8 || parseInt(length) > 128 || isNaN(parseInt(length)));
  do {
    if(isFirstRun) {
      charChoice();
      isFirstRun = false;
    } 
    else {
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
  selectionArr=[...lowercaseArr, ...uppercaseArr, ...numericArr, ...specialArr].filter(Boolean);
  console.log(selectionArr);
}

function characterSelection() {
//need to check if temp3 is empty now
  do {
    result="";
    temp3 = [...selectionArr];
    for(var i=0; i<length; i++){
      temp1 = Math.floor(Math.random()*selectionArr.length);
      console.log(selectionArr[temp1]);
      temp2 = selectionArr[temp1];
      result += temp2.charAt(Math.floor(Math.random()*temp2.length));
      temp3[temp1] = "";
      console.log("selectionArr: " + selectionArr);
      console.log("result is: " + result + " temp3: " + temp3);
    };
    console.log("temp3.filter(Boolean).length: " + temp3.length);
  } while (temp3.filter(Boolean).length !== 0);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
