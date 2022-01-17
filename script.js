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
var choosedCategoriesArr;
var result="";
var rand;
var randCategoriesArr;
var unusedCategoriesArr;
var isFirstClick = true;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.textContent = result;
}

// Generate a random password based on user selection
function generatePassword() {
  // Enable user to click the "generate password" multiple times with different passwords show up each time, without answering the prompt repetitively
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

//Collects user's input on length and character selection criteria and write to five variables, length, lowercase, uppercase, numeric, and special, respectively
function userChoice(){
  var isFirstRun = true;
  // Collects user's input on length
  do {
    length = window.prompt("Enter length (8-128)");
  } while (parseInt(length) < 8 || parseInt(length) > 128);// Struggled to figure out how to avoid user giving out a non-number. Tentative answer: while (parseInt(length) < 8 || parseInt(length) > 128 || isNaN(parseInt(length))); 
  // Collects user's input on character selection.
  do {
    if(isFirstRun) {
      charChoice();
      isFirstRun = false;
    } else {
      window.alert("Please make sure you select at least one type of character for your password!");
      charChoice();
    }
  } while (lowercase+uppercase+numeric+special === "nnnn"); // Check if user did not put a single yes to one of the character categories
}

//Collects user's character selection criteria specifically; put in a separate function to be concise
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

// Generate an array for selected charater categories
function passwordArray() {
  if(lowercase==="n"){
    lowercaseArr=""; // If user excludes one category, the value is replaced 
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
  choosedCategoriesArr=[...lowercaseArr, ...uppercaseArr, ...numericArr, ...specialArr].filter(Boolean); // This array stores all the remaining categories that user decided to use
}

// Generate the password based on user selection
function characterSelection() {
  // This loop checks if the password string includes all the category selected by the user
  do {
    result="";
    unusedCategoriesArr = [...choosedCategoriesArr]; // This array stores the selected but unused categories by the generated password, such as lowercase
    for(var i=0; i<length; i++){
      rand = Math.floor(Math.random()*choosedCategoriesArr.length); 
      randCategoriesArr = choosedCategoriesArr[rand]; // Randomly select one value stored in the array that includes all the remaining categories that user decided to use, such as lowercase
      result += randCategoriesArr.charAt(Math.floor(Math.random()*randCategoriesArr.length)); // Randomly select one character from the selected category array, such as a from lowercase, and add to the result string
      unusedCategoriesArr[rand] = ""; // If one category has been used, remove it from the selected but unused category array, such as removing lowercase
    };
  } while (unusedCategoriesArr.filter(Boolean).length !== 0); // If all selected catogories are used, each value of the checkArr should be "", so after filtering its length should be 0. If not, the loop should be repeated to make sure all selected categories are used.
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
