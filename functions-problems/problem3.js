//Goal: What is the objective? Write a function that will count the number of occurrences of the specified letter within the string.

//Step 1: Create a function name countLetter that accepts two arguments/parameters string(str) and letter(letter)
//Step 2: Create a variable name letterCount and set it to 0. This will keep track of counting the letters after every iteration from my loop
//Step 3: Create a loop that will inspect each letter one by one in the string(str)? Why? This loop is checking to see if letter "e" is in the string at a specified index/position. If it is then update "letterCount" by one.
//Step 4: Return the letterCount and print to console my function countLetter("live simply and be grateful", "e") which will give me "3"


function countLetter(str, letter){
    let letterCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === letter){
            letterCount ++
        }
    }
    return letterCount;
}
console.log (countLetter("live simply and be grateful", "e"));

