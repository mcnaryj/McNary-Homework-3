var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "!@#$%^&*()_+=-`?";
var number = "1234567890";


// Write password to the #password input
function getLowercase() {
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

function getUppercase() {
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}

function getNumber() {
  return number[Math.floor(Math.random() * number.length)];
}

function getSpecialChar() {
  return specialChar[Math.floor(Math.random() * specialChar.length)];
}



function generatePassword() {  
  

  enter = parseInt(prompt("Please input a number between 8 and 128.")); 

    if (!enter) {
      alert("Please enter a number between 8 and 128. The form cannot be blank.")
    }

    else if (enter < 8 || enter > 128 || (isNaN(enter)) || enter == ""){
      alert("All conditions must be accepted by pressing OK. Please click Generate Password and complete the form again.");
    }
    else {   
    console.log("Character length approved");
    confirmSpecialChar = (confirm("Do you want to include special characters? If so, click OK to proceed. If not, click cancel."));
    if (!confirmSpecialChar) {
      alert("The password must include  numbers, special character, uppercase letters and lowercase letters")
    }
    console.log("Special characters included");
    confirmUppercase = confirm("Do you want to include uppercase letters? If so, click OK to proceed. If not, click cancel.")
    if (confirmUppercase) {
      alert("The password must include  numbers, special character, uppercase letters and lowercase letters")
    }
    console.log("Uppercase letters included");
    confirmLowercase = confirm("Do you want to include lowercase letters? If so, click OK to proceed. If not, click cancel.")
    if (!confirmLowercase) {
      alert("The password must include  numbers, special character, uppercase letters and lowercase letters")
    }
    console.log("Lowercase letters included");
    confirmNumber = confirm("Do you want to include numbers? Click OK to proceed. If not, click cancel.")
    if (!confirmNumber) {
      alert("The password must include  numbers, special character, uppercase letters and lowercase letters")
    }
    console.log("Numbers Included");
    };


  var password = [];

    if (specialChar == true) {
        password += getSpecialChar();
    }
    console.log("Special characters included");
  }
  /* else {
    if (specialChar == false) {
      prompt("All conditions must be accepted by pressing OK. Please click Generate Password and complete the form again.");
    }
  };

    if (confirm("Do you want to include numbers? Click OK to proceed. If not, click cancel.")){
    if (number == true) {
        password += getNumber();
    }
    console.log("Numbers Included");
    }
  };
    if (confirm("Do you want to include uppercase letters? Click OK to proceed. If not, click cancel.")){
    if (upperCase == true) {
        password += getUppercase();
    }
    console.log("Uppercase letters included");
  };
  if (confirm("Do you want to include lowercase letters? Click OK to proceed. If not, click cancel.")){
    if (lowerCase == true) {
        password += getLowercase();
    }
    console.log("Lowercase letters included");
  };
*/
  /*  for (let i = password.length; i < passwordLength; i++) {
      const x = generatePassword();
      password += x;
    }
  */
    var password
    // password.innerText = password;
    
  // };

// generate password stuff will come at the end

  // remind that this may change - an error msg is needed for any of these conditions
document.getElementById("password").innerHTML = finalPassword;






  // Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);