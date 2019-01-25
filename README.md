# Project Title

Beep-Boop translator

# Description

This translator takes in a number from a user. It then displays the number as a range, and replaces all instances of "3" with the string "I'm sorry Dave, I can't do that", all instances of "2" with "boop!", and all instances of "1", with "beep!".

If the translator gets to a double digit number it replaces the entire number with the appropriate string for whichever digit is highest in that number. For instance: 13 will become "I'm sorry Dave, I can't do that."

#Specs

Spec 1: The program returns the user input as a range
  input: 10
  output: 1,2,3,4,5,6,7,8,9,10

Spec 1: The program converts the inputted numbers to a to a to a string
  input: 1
  output: "1"

Spec 3: The program search for each number to see if a 3 is included
  input: 3
  output: true
  inputB: 2
  outputB: false

  (the program then does this for 2 and 1 if no 3 is found)

Spec 4: The program pushes the corresponding string into the output string that is displayed to the user
  input: 1
  output: "beep!"




## Getting Started

you can either visit the website at https://jaypeejay.github.io/beep-boop

or clone the website from my github repository, and open the index.html in Google Chrome

### Prerequisites

Computer
OS
Internet Browser (preferably Chrome)



## Built With

* HTML
* CSS
* Bootstrap
* javaScript
* jQuery



## Authors

* **Jack Collins**  (https://github.com/jaypeejay)



## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

Everyone at Epicodus!
