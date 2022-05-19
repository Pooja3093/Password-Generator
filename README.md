## JSWK3CH1PP
# Week 2 JavaScript challenge
## Password-Generator

This code was developed as an assignment for Module 3 Javascript.

GitHub Repository
Deployed GitHub IO
Full Demo Video
Password-Generator Demo

## Summary
HTML, CSS and Javascript documents combine to create a random password generator. HTML and CSS code were provided as this was a refractoring assignment.
This project emphasizes the use of Javascript to make a user interactive web page.


### Features:
#### A generate button
This will send the user a series of prompts, confirms and alerts to collect data.
After user data is collected, a random password will be generated using Javascript.

#### A Textarea
This textarea will display the users password once it is generated.

#### A Copy button
This will copy the users password to the user's devices clipboard.

#### A Reset button
This will allow the user to reset the textarea, should the user want to generate more passwords.


## Details:
The user will be prompted to choose from the following password criteria: 
* Length: 8 and 128 characters
* Uppercase characters
* Lowercase characters
* Numeric characters
* Special characters

The application will validate user input and ensure that at least one character type is selected and length is between 8 to 128 characters.
An alert will be shown if validation fails and the user will have to start again.

Once the validation is complete, in the background an array with the selected criteria will be generated and math.random and math.floor functions will be used to select random characters.
Hence ensuring that everytime a unique password is created.

As a bonus, the user can click on copy button to copy the password to their clipboard and reset button the textarea to remove the password generated.


### Showcase:

Event listener (onclick)

Alert, Prompt and Confirm

ParseInt()

Math.random() and Math.floor()

Responsive page


### Links:
GitHub Repository

Deployed GitHub IO

Full Demo Video

### Screenshot of application:
