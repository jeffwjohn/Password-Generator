// Assignment code here
//debugger;

function generatePassword() {
    var length = parseInt(promptLength),
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
        retValue = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retValue += charset.charAt(Math.floor(Math.random() * n));
    }
    return retValue;
};

console.log("Welcome to Password Generator!");
alert("Welcome to Password Generator!");

var pickLength = function () {
    promptLength = prompt("Choose a length between 8-128 characters.");
    console.log("Choose a length between 8-128 characters.");
    console.log(promptLength);

    if (promptLength === "" || promptLength === null || promptLength < 8 || promptLength > 128) {
        alert("Answer invalid. Please try again!");
        console.log("Answer invalid. Please try again!");
        return pickLength();
    } else {
         generatePassword();
    }
    

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

pickLength();
