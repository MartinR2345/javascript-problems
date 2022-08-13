//Goal: What I'm I trying to do? Write a function that find the longest word withing the string.

//Step 1: Create a function called findLongestWord that accepts a string(str) as a parameter
//Step 2: The first thing I'm doing in this function is create a variable called arrOfWords. Why? I'm turning my string into an array of words with a space in between each word with the split(" ") method
//Step 3: The second thing I'm doing is create a variable name longestWord. Why? This variable is use to be compare with my arrOfWords in the for loop.  The length of an empty string is 0 and I can use this to compare in my for loop
//Step 4: The third thing I'm doing is creating a loop. Why? I'm checking to see if the first word of my arrOfWords length is greater than the length of longestWord then update longestWord.
//Step 6: Return longestWord variable then print to the console findLongestWord("I am grateful") which will give me "grateful" as the longest word

const findLongestWord = (str) => {
    let arrOfWords = str.split(" ");
    let longestWord = "";
    for(let i = 0; i < arrOfWords.length; i++){
        if (arrOfWords[i].length > longestWord.length)
        longestWord = arrOfWords[i];
    }
    return longestWord;
}

console.log(findLongestWord("I am grateful"));