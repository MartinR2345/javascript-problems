//Goal: What I'm I trying to do? Write a function that find the longest word withing the string.

//Step 1: Create a function name findLongestWord that accepts a string(str) as a parameter
//Step 2: Create a variable name newArray and set it to string(str). This string(str) will use the split() method to turn this string into an array of each individual characters so I can loop through each individual character and this will also tell me the length of it as well.
//Step 3: Create a variable name longest and set it to an empty string.  Why? The length of an empty is 0 and I can use this to compare in my for loop
//Step 4: Create a for loop. Why? This will loop over my array
//Step 5: Create a if statment. Why? This will check to see if my newArray[i].length is greater than my longest.length varable and if it is then longest will be updated to newArray[i]
//Step 6: Return longest variable then print to the console findLongestWord("I am grateful") which will give me "grateful" as the longest word

function findLongestWord(str){
    let newArray = str.split(" ");
    let longest = "";
    for(let i = 0; i < newArray.length; i++){
        if (newArray[i].length > longest.length)
        longest = newArray[i];
    }
    return longest;
}

console.log(findLongestWord("I am grateful"));