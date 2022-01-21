
# JavaScript: Password Generator

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## How I Accomplished the Task

At first look of the project I realized that in order to be able to have criterias 
for the password I must have seperate arrays for each criteria.

I created a string array for each criteria
* Upper Case Letters
    ```javascript 
    let lettersUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    ```
* Lower Case Letters
    ```javascript 
    let lettersLow = "abcdefghijklmnopqrstuvwxyz";
    ```
* Numbers
    ```javascript 
    let num = "1234567890";
    ```
* Special Characters
    ```javascript 
    let special = " !\"#$%&\'()*+,-./:;<=>?@[]^_`{|}~";
    ```

I then began getting the user's input via `window.prompt();` and `window.confirm()`
```javascript
// Ask for the amount of characters the user wants
passLen = window.prompt("How many characters do you want your password to be? \nMust be between 8-128");

//Ask to see if the user wants upper case letters
passCaseUp = window.confirm("Do you want to include upper case letters? \nClick OK for Yes and Cancel for No");

//Ask to see if the user wants lower case letters
passCaseLow = window.confirm("Do you want to include lower case letters? \nClick OK for Yes and Cancel for No");

// Ask to see if the user wants numbers
passNum = window.confirm("Do you want to include numbers? \nClick OK for Yes and Cancel for No");

// Ask to see if the user wants special characters
passSpecial = window.confirm("Do you want to include special characters? \nClick OK for Yes and Cancel for No");
```

Each variable was created at the top of my function.

## Logic
In order to get the generated password to be truly random I decided to join my 
string arrays based on what the user selected.

> If the user only selected two of the criterias then only those two criteria strings would be 
joined together to create a new string of legal characters.

```javascript

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

```

I then iterated through my newly created string array of legal characters to choose a
random index in that array to add that specified index character to password. This
was looped until it was the length of what the user asked for.

```javascript
// Loop to randomly iterate through the given criteria of characters
// for the length that the user gave
for(let i = 0; i < passLen; i++)
{
    pass += criteria[Math.floor(Math.random() * criteria.length)];
}

```

## You can view the deployed application via [Password-generator](https://nkrilis.github.io/Password-Generator/) 
## Thank you for reading me :smiley: