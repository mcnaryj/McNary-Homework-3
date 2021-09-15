## Purpose

The purpose of this README is to explain the function of the password generator, along with the features that meet the acceptance criteria.

# Password Generator

The objective of this assignment, as per the readme, is to create an applicate that allows employees to generate random passwords based on the selected criteria. The app runs in the browser, and features dyanmically updated html and css features powered by the js code.


## Installation/Viewing the Files

Download the files contained in the McNary-Homework-3 repository, either through Github or by making a clone of the repository and downloading it locally. Once downloaded, open the file index.html to view the webpage.


## User Story
A company would like to create a password generate that allows employees to generate random passwords.

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
When the generate password button is clicked, it initiates a series of prompts for password criteria, including the length of the password, which types of characters are to be included in the password.

I chose to make the requirement that all 4 password criteria must be included in order for the password to generate - when one+ of these is ommited, the password will be one fewer character for each condition that is ommitted. If none are included, the password will not generate.

## Mock-Up

The below image demonstrates the appearance and functionality of the webpage, [Generate a password!](assets/images/Password Generator Demo.gif)

## Notes



## Contributing
I will be providing the url for the site via the github repository, and it can also be found here: https://mcnaryj.github.io/McNary-Homework-3/ however any pull requests are welcome.

