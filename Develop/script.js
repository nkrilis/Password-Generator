// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() 
{
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword()
{
  // function variables
  let passLen;
  let pass = "";
  let criteria = "";

  // Variables to store user selections
  let passCaseUp;
  let passCaseLow;
  let passNum;
  let passSpecial;

  // Criteria strings to create password with
  let lettersUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lettersLow = "abcdefghijklmnopqrstuvwxyz";
  let num = "1234567890";
  let special = " !\"#$%&\'()*+,-./:;<=>?@[]^_`{|}~";

  // function to check how many characters the user wants
  function length()
  {
    // Ask for the amount of characters the user wants
    passLen = window.prompt("How many characters do you want your password to be? \nMust be between 8-128");
    if(passLen >= 8 && passLen <= 128)
    {
      return true;
    }
    //Return false if it doesnt satisy my range  
    else
    {
      window.alert("INVALID OPTION")
      length();
    }
  }

  // Function call for length input
  length();

  //Ask to see if the user wants upper case letters
  passCaseUp = window.confirm("Do you want to include upper case letters? \nClick OK for Yes and Cancel for No");

  //Ask to see if the user wants lower case letters
  passCaseLow = window.confirm("Do you want to include lower case letters? \nClick OK for Yes and Cancel for No");

  // Ask to see if the user wants numbers
  passNum = window.confirm("Do you want to include numbers? \nClick OK for Yes and Cancel for No");

  // Ask to see if the user wants special characters
  passSpecial = window.confirm("Do you want to include special characters? \nClick OK for Yes and Cancel for No");

  // Conditional statements for the user's criteria input values (type boolean) 
  if(passCaseUp)
  {
    criteria += lettersUp;
  }

  if(passCaseLow)
  {
    criteria += lettersLow;
  }

  if(passNum)
  {
    criteria += num;
  }

  if(passSpecial)
  {
    criteria += special;
  }
  
  // If no criteria is selected recall the function to try again
  if(!passCaseUp && !passCaseLow && !passNum && !passSpecial)
  {
    alert("Please choose at least one criteria!")
    generatePassword();
  }

  // Loop to randomly iterate through the given criteria of characters
  // for the length that the user gave
  for(let i = 0; i < passLen; i++)
  {
    pass += criteria[Math.floor(Math.random() * criteria.length)];
  }

  return pass;
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
