//Goal: What is the objective? Write a function that will count the number of occurrences of the specified letter within the string.

//Step 1: Create a function name letterCounter that accepts two arguments/parameters string(str) and letter(letter)
//Step 2: Create a variable name countTheLetter and set it to 0.
//Step 3: Create a for loop that will loop through the string(str)
//Step 4: Create a if statement that will check to see if the string is equal to our second parameter which is letter.  If it is then update the countTheLetter variable by 1.  Also I use the charAt() method to or return the character at a specified index/position in a string
//Step 5: Return the countTheLetter variable and print to console "letterCounter("live simply and be grateful", "e") which will give me "3"


function letterCounter(str, letter) {
    let countTheLetters = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === letter){
            countTheLetters ++
        }
    }
    return countTheLetters;
}
console.log(letterCounter("live simply and be grateful", "e"));