// Assignment code here
//debugger;
//"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

function generatePassword() {
    var length = parseInt(promptLength),
        charset = characters.join(''),
        retValue = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retValue += charset.charAt(Math.floor(Math.random() * n));
    }
    console.log(characters.length);
    console.log([characters]);
    return retValue;
};

console.log("Welcome to Password Generator!");
alert("Welcome to Password Generator!");

var pickLength = function () {
    promptLength = prompt("Choose a length between 8-128 characters.");
    console.log("Choose a length between 8-128 characters.");
    console.log(promptLength);

    if (promptLength === "" || promptLength === null || promptLength < 8 || promptLength > 128 || isNaN(promptLength)) {
        alert("Answer invalid. Please try again!");
        console.log("Answer invalid. Please try again!");
        return pickLength();
    } else {
        pickType();
    }
};

var pickType = function () {
    characters = [];
    alert("Your password must be between 8-128 characters in length, and must consist of at least one of the following character types: uppercase letters, lowercase letters, numbers, and/or special characters.");
    console.log("Your password must be between 8-128 characters in length, and must consist of at least one of the following character types: uppercase letters, lowercase letters, numbers, and/or special characters.");
    alert("Please respond to the following questions by typing either 'YES' or 'NO' only.");
    promptTypeUpper = prompt("Would you like to include uppercase letters?");
    console.log(promptTypeUpper);
    promptTypeUpper = promptTypeUpper.toLowerCase(); 
    if (promptTypeUpper === "" || promptTypeUpper === null || promptTypeUpper !== "yes" && promptTypeUpper !== "no") {
        alert("You need to provide a valid answer! Please try again.");
        return pickType();
    }  
    if (promptTypeUpper === "yes") {
        characters.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    } 

    promptTypeLower = prompt("Would you like to include lowercase letters?");
    console.log(promptTypeLower);
    promptTypeLower = promptTypeLower.toLowerCase();
    if (promptTypeLower === "" || promptTypeLower === null || promptTypeLower !== "yes" && promptTypeLower !== "no") {
        alert("You need to provide a valid answer! Please try again.");
        return pickType();
    } 
    if (promptTypeLower === "yes") {
        characters.push('abcdefghijklmnopqrstuvwxyz');
    }
    promptTypeNumber = prompt("Would you like to include numbers?");
    console.log(promptTypeNumber);
    promptTypeNumber = promptTypeNumber.toLowerCase();
    if (promptTypeNumber === "" || promptTypeNumber === null || promptTypeNumber !== "yes" && promptTypeNumber !== "no") {
        alert("You need to provide a valid answer! Please try again.");
        return pickType();
    } 
    if (promptTypeNumber === "yes") {
        characters.push('0123456789');
    }
    promptTypeSpecial = prompt("Would you like to include special characters?");
    console.log(promptTypeSpecial);
    promptTypeSpecial = promptTypeSpecial.toLowerCase();
    if (promptTypeSpecial === "" || promptTypeSpecial === null || promptTypeSpecial !== "yes" && promptTypeSpecial !== "no") {
        alert("You need to provide a valid answer! Please try again.");
        return pickType();
    } 
    if (promptTypeSpecial === "yes") {
        characters.push("!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
    }
    alert("Click 'Generate Password' when ready. You may continue clicking to generate new passwords with the same criteria. To select new criteria, reload the page.");

    generatePassword();
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

let characters = [];
console.log(characters.length);
console.log([characters]);
pickLength();
