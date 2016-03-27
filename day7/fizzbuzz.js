// Write a function called fizzBuzz that takes two numbers, then iterates through the numbers 1 - 100.
// The function will print "fizz" if the current number is divisible by the first number, "buzz" if the
// current number is divisible by the second number,
// "fizzbuzz" if it's divisible by both, else print the current number.
var num1 = parseInt(prompt("Give me a number"));

var num2 = parseInt(prompt("Give me another number"));

for (var i = 0; i < 101; i++) {
  if (i % num1 === 0 && i % num2 === 0) {
    console.log("Fizzbuzz");
  }
  else if (i % num1 === 0) {
    console.log("fizz");
  }
  else if (i % num2 === 0) {
    console.log("buzz");
  }
  else {
    console.log(i);
  }

}
