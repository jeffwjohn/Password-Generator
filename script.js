// Assignment code here
debugger;
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
    promptLength = prompt("Choose a password length between 8-128 characters.");
    console.log("Choose a password length between 8-128 characters.");
    console.log(promptLength);

    if (promptLength === "" || promptLength === null || promptLength < 8 || promptLength > 128 || isNaN(promptLength)) {
        alert("Answer invalid. Please try again!");
        console.log("Answer invalid. Please try again!");
        return pickLength();
    } else {
        pickType();
    }
};

let characters = [];

var pickType = function () {

    alert("Your password must consist of at least one of the following character types: uppercase letters, lowercase letters, numbers, and/or special characters.");
    console.log("Your password must be between 8-128 characters in length, and must consist of at least one of the following character types: uppercase letters, lowercase letters, numbers, and/or special characters.");
    alert("Please respond to the following questions by clicking 'OK' for yes and 'Cancel' for no.");


    var validTypeUpper = false
    while (!validTypeUpper) {
        var confirmTypeUpper = confirm("Would you like to include uppercase letters?");
        console.log(confirmTypeUpper);
        if (confirmTypeUpper === true) {
            characters.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
            var validTypeUpper = true;
        } else {
            var validTypeUpper = true;
        }
    }

    var validTypeLower = false
    while (!validTypeLower) {
        var confirmTypeLower = confirm("Would you like to include lowercase letters?");
        console.log(confirmTypeLower);
        if (confirmTypeLower === true) {
            characters.push('abcdefghijklmnopqrstuvwxyz');
            var validTypeLower = true;
        } else {
            var validTypeLower = true;
        }
    }

    var validTypeNumber = false
    while (!validTypeNumber) {
        var confirmTypeNumber = confirm("Would you like to include numbers?");
        console.log(confirmTypeNumber);
        if (confirmTypeNumber === true) {
            characters.push('0123456789');
            var validTypeNumber = true;
        } else {
            var validTypeNumber = true;
        }
    }

    var validTypeSpecial = false
    while (!validTypeSpecial) {
        var confirmTypeSpecial = confirm("Would you like to include special characters?");
        console.log(confirmTypeSpecial);
        if (confirmTypeSpecial === true) {
            characters.push("!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
            var validTypeSpecial = true;
        } else {
            var validTypeSpecial = true;
        }
    }

    if (characters.length === 0) {
        alert("You must choose at least one character type. Please try again.")
        pickType();
    } else {
        alert("Click 'Generate Password' when ready. You may continue clicking to generate new passwords with the same criteria. To select new criteria, reload the page.");
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