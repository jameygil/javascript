//Write a Javascript code that prompts the user for their score (0 - 100) on the exam and
// then prints out their letter grade (F - A+).

// Stretch: Make the program prompts the user to enter the score again if the it'
//s more than a 100 or less than 0

var score = parseInt(prompt("What is your score out of 100?"));

if (score > 85) {
  console.log("You got an A!");
}
else if (score > 73) {
  console.log("You got a B!");
}
else if (score > 63) {
  console.log("You got a C!");
}
else if (score > 50) {
  console.log("You got a D!");
}
else if (score < 50) {
  console.log("You failed!");
}
else if (score > 100) {
  parseInt(prompt("Enter a score from 1-100");)
}
else {
  parseInt(prompt("enter a score from 1-100");)
}
