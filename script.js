var generateBtn = document.querySelector("#generate");
// establishing variables to be included in the password - saw the split option but this was easier to conceptualize, at least for the time being
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "\:", "\;", ".", "/", "<", "=", ">", "?", "@", ",", "-", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/* Found this function for mapping lowercase letters to uppercase letters. My code was only generating the uppercase letter "Z" in the password, which is hardly random. The below code converts the lowercase letters into capital letters. After testing, the password does indeed have a random mix of uppercase letters. Yay! */
var choice;
var toUpper = function (x) {
  return x.toUpperCase();
};
// Defined the uppercase variable according the function above
var uppercase = lowercase.map(toUpper);

// Begin generate password function
function generatePassword() {
  // Defining password variable and potential characters variable
  var password = [];
  var potChar = [];
  // Begin prompt (found a couple ways to do this, but parseInt seemed interesting so I've left it)
  enter = parseInt(prompt("Please input a number between 8 and 128.")); 
    console.log("Character length approved");
    // Started logging things here to keep track of what they were doing
    // Some of these elses and ifs might be redundant, but the function works and the console logs the desired result
    if (!enter) {
      alert("Please enter a number between 8 and 128. This form cannot be blank.")
          console.log("Character length not approved");
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
    // Created an else if segment to control for which variables are collected for each prompt.
    /* I felt like I was starting to understand the functionality a bit better after working through this a couple times, so I added the if (useVariable===false) statements to verify that they can still be contained within an else, and the result is just one else with a lot of ifs. After doing so, I realized that yes, these have a function, and sometimes it can seem tedious to write out the opposite, it's an important way to control for any input that a potential user might make. I am sure there is a cleaner way to do this, but the logic holds up, at least to me. */
    else { 
      useSpecialChar=confirm("Do you want to include special characters? If so, click OK to proceed. If not, click cancel.")
      if (useSpecialChar===true) {
        console.log("Special characters included")
      }
      if (useSpecialChar===false) { 
      alert("The password must include numbers, special characters, uppercase letters and lowercase letters.");
      console.log("Special characters not included");
      }
      useUppercase=confirm("Do you want to include uppercase letters? If so, click OK to proceed. If not, click cancel.")
      if (useUppercase===true){
      console.log("Uppercase letters included")
      }
      if (useUppercase===false) {
      alert("The password must include numbers, special characters, uppercase letters and lowercase letters.");
      console.log("Uppercase letters not included");
      } 
      useLowercase=confirm("Do you want to include lowercase letters? If so, click OK to proceed. If not, click cancel.")
      if (useLowercase===true) {
      console.log("Lowercase letters included")
      }
      if (useLowercase===false) {
      alert("The password must include numbers, special characters, uppercase letters and lowercase letters.");
      console.log("Lowercase letters not included");
      }
      useNumber=confirm("Do you want to include numbers? If so, click OK to proceed. If not, click cancel.")
      if (useNumber===true) {
      console.log("Numbers included")  
      }
      if (useNumber===false) {
      alert("The password must include numbers, special characters, uppercase letters and lowercase letters.");
      console.log("Numbers not included");
      }

    };
    // Used the "useVariable" to convert the boolean values into the desired result
    if (useNumber===true){
    password.push(getRandomCharacter(number));
    potChar=potChar.concat(number);
    console.log("Pulling random number")
    }
    
    if (useSpecialChar===true){
    password.push(getRandomCharacter(specialChar));
    potChar=potChar.concat(specialChar);
    console.log("Pulling random special character")
    }

    if (useUppercase===true){
    password.push(getRandomCharacter(uppercase));
    potChar=potChar.concat(uppercase);
      console.log("Pulling random uppercase letter")
    }
      
    if (useLowercase===true) {
    password.push(getRandomCharacter(lowercase));
    potChar=potChar.concat(lowercase);
    console.log("Pulling random lowercase letter")
    };
    // The uppercase letters seem to come up less often than do the other options

    // A quirk that met the requirements, as there are 4 values in the "enter" array - not sure how to phrase the variable in another way, but if < 4 inputs are selected, the generated password will be correspondingly 1 character lower.
    var enter = enter-4;
    for (var i = 0; i <  enter; i++) {
      password.push(getRandomCharacter(potChar))
    };
    return password.join("");
  };




    
    // Random characters function (got a lot of help on this one)
    function getRandomCharacter(choice) {
    var randomCharacter=choice[Math.floor(Math.random()*choice.length)];
    return randomCharacter;
    };


  // Function to write password
  function writePassword() {
  var password = generatePassword();
  var passwordTxt = document.querySelector("#password");

  passwordTxt.value = password;
  
  }

  // Event listener added to generate button
  generateBtn.addEventListener("click", writePassword);



