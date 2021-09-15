var generateBtn = document.querySelector("#generate");
// establishing variables to be included in the password
var uppercase = ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "\:", "\;", ".", "/", "<", "=", ">", "?", "@", ",", "-", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// begin generate password function
function generatePassword() {
  // defining password variable and potential characters variable
  var password = [];
  var potChar = [];
  enter = parseInt(prompt("Please input a number between 8 and 128.")); 
    console.log("Character length approved");
    if (!enter) {
      alert("Please enter a number between 8 and 128. This form cannot be blank.")
          console.log("Character length approved");
    }
    if(enter===NaN || enter < 8 || enter > 128 || enter===""){
      alert("You must enter a valid number between 8 and 128. The form cannot be blank.");
      console.log("Enter a valid number")
      return;
    }
    if (!uppercase && !lowercase && !number && !specialChar) {
      console.log("Uppercase letters included");
      alert("The password must include numbers, special characters, uppercase letters and lowercase letters.") 
      return

    }

    else { 
      useSpecialChar=confirm("Do you want to include special characters? If so, click OK to proceed. If not, click cancel.")
      console.log("Special characters not included");
      useUppercase=confirm("Do you want to include uppercase letters? If so, click OK to proceed. If not, click cancel.")
      console.log("Uppercase letters included");
      useLowercase=confirm("Do you want to include lowercase letters? If so, click OK to proceed. If not, click cancel.")
      console.log("Lowercase letters included");
      useNumber=confirm("Do you want to include numbers? If so, click OK to proceed. If not, click cancel.")
      console.log("Numbers included");
    };
    
    if (useNumber===true){
    password.push(getRandomCharacter(number));
    potChar=potChar.concat(number);
    console.log("Pulling random number")
    }
    
    if (useSpecialChar===true){
    password.push(getRandomCharacter(specialChar));
    potChar=potChar.concat(specialChar);
    console.log("Pulling random character")
    }

    if (useLowercase===true) {
    password.push(getRandomCharacter(lowercase));
    potChar=potChar.concat(lowercase);
    console.log("Pulling random lowercase letter")
    };
    
    if (useUppercase===true){
      password.push(getRandomCharacter(uppercase));
      potChar=potChar.concat(uppercase);
      console.log("Pulling random upper case letter")
    };
    

    var enter = enter-4;
    for (var i = 0; i <  enter; i++) {
      password.push(getRandomCharacter(potChar))
    };
    return password.join("");
  };




    
    // Random characters fxn
    function getRandomCharacter(choice) {
    var randomCharacter=choice[Math.floor(Math.random()*choice.length)];
    return randomCharacter;
    };

  function writePassword() {
  var password = generatePassword();
  var passwordTxt = document.querySelector("#password");

  passwordTxt.value = password;

  }



  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);



