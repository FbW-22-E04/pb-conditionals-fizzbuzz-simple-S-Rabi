// ex 1:
let divisible = 15;
if (divisible % 3 == 0 && divisible % 5 == 0) {
  console.log("FizzBuzz");
} else if (divisible % 3 == 0) {
  console.log("Fizz");
} else if (divisible % 5 == 0) {
  console.log("Buzz");
} else {
  console.log(divisible);
}
