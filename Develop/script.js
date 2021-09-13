var generateBtn = document.querySelector("#generate");
var uppercase; 
var lowercase; 
var specialChar; 
var number; 

var choices;

uppercase = ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "\:", "\;", ".", "/", " < ", "=", " > ", " ? ", "@", ",", "-", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

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
    
    console.log("Character length approved");

    if (!enter) {
      alert("Please enter a number between 8 and 128. This form cannot be blank.")
          console.log("Character length approved");

    }
    
    else if (enter < 8 || enter > 128 || (isNaN(enter)) || enter == ""){
      alert("All conditions must be accepted by pressing OK. Please click Generate Password and complete the form again.");
    }
    
    else {   
    specialChar = (confirm("Do you want to include special characters? If so, click OK to proceed. If not, click cancel."));
    }
    console.log("Special characters included");
    
    if (!specialChar) {
      console.log("Special characters not included");
      alert("The password must include numbers, special characters, uppercase letters and lowercase letters.")
    }

    else {
    uppercase = confirm("Do you want to include uppercase letters? If so, click OK to proceed. If not, click cancel.")
    };
    console.log("Uppercase letters included");
    if (!uppercase) {
      console.log("Uppercase letters not included");
      alert("The password must include numbers, special characters, uppercase letters and lowercase letters.")  
    }

    else {
    lowercase = confirm("Do you want to include lowercase letters? If so, click OK to proceed. If not, click cancel.")
    };
    console.log("Lowercase letters included");

    if (!lowercase) { 
      console.log("Lowercase letters not included");
      alert("The password must include numbers, special characters, uppercase letters and lowercase letters.")
    
    }
    
    else {
    number = confirm("Do you want to include numbers? Click OK to proceed. If not, click cancel.")
    };
    console.log("Numbers Included");

    if (!number) {
      console.log("Lowercase letters not included");
      alert("The password must include numbers, special characters, uppercase letters and lowercase letters.")
    }
    
    else if (specialChar && number && uppercase && lowercase) {

      choices = password.concat(specialChar, number, uppercase, lowercase);
  }

    for (var i = 0; i < enter; i++) {
      var pickChoices = choices[Math.floor(Math.random() * choices.length)];
      password.push(pickChoices);
  }

  
    var ps = password.join("");
    UserInput(ps);
    return ps;
  }
  
  function UserInput(ps) {
    document.getElementById("password").textContent = ps;
  }


  


  var password = [];
  
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
   // var password
    // password.innerText = password;
    // };
// generate password stuff will come at the end
// remind that this may change - an error msg is needed for any of these conditions
// document.getElementById("password").innerHTML = finalPassword;






  // Add event listener to generate button
var get = document.querySelector("#generate");

generateBtn.addEventListener("click", generatePassword);
get.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});