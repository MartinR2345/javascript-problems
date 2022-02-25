//Step 1: Create a function name fizzBuzz that has no parameters, no arguments
//Step 2: Create a for loop that loops over each number of the integers from 1 to 100
//Step 3: Create an if else statement.  This first if statement will use a modulo operator(%) and logical AND(&&) to check and see if the remainder is equal to zero when it is divided by 3 & 5. If it's true, then print to console "FizzBuzz"
//Step 4: Create an else if statement.  This else if statement will check for multiples of 3 and this will print to console "Fizz"
//Step 5: Create an else if statement.  This else if statement will check for multiples of 5 and this will print to console "Buzz"
//Step 6: Create an else statement.  This else statement will print to the console variable (i) if none of the conditions are true.

function fizzBuzz() {
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0 && i % 5) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else console.log(i);
    }
}
fizzBuzz();