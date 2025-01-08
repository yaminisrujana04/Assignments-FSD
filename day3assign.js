//program to print the greater number
let x = Number(prompt("Enter a number: "));
let y = Number(prompt("Enter a number: "));
let z = Number(prompt("Enter a number: "));
if (x > y && x > z) {
  console.log("x is maximum");
} else if (y > x && y > z) {
  console.log("y is maximum");
} else if (z > x && z > y) {
  console.log("z is maximum");
} else if (x == y && x == z) {
  console.log("All are equal");
} else if (x == y && x > z) {
  console.log("x and y are equal and maximum");
} else if (x == z && x > y) {
  console.log("x and z are equal and maximum");
} else if (y == z && y > x) {
  console.log("y and z are equal and maximum");
} else {
  console.log("Invalid");
}

//Write a JavaScript program that prints numbers from 1 to 100. However, for multiples of 3, print 'Fizz' instead of the number, and for multiples of 5, print 'Buzz'. For numbers that are multiples of both 3 and 5, print 'FizzBuzz'.
for(let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}