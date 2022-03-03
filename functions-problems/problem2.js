//Goal: What is the objective? To write a function that counts the number of vowels withing the string

//Step 1: Create a function name vowelsCount that accepts a String(str) as a parameter
//Step 2: Create a variable name countTheVowels and set it to 0.  
//Step 3: Create an array name vowelsArray that will store the vowels in one place
//Step 4: Create a for of loop so it can loop and look at every character of the string(str) and check to see whether or not it is a vowel.
//Step 5: Create an if statement to check whether the current character is a vowel or not. Also I use the includes() method to check if my vowelsArray contains the characters I'm looping over in the loop.  Also I use the .toLowerCase() method to make sure it match vowelsArray variable. If the character is a vowel then "countTheVowel" will be updated by 1.
//Step 6: Return the variable countTheVowels and print to console vowelCount("anaemia") which will give me 5


function vowelsCount(str){
    let countTheVowels = 0;
    const vowelsArray = ['a', 'e', 'i', 'o', 'u'];
    for (let vowel of str){
        console.log(vowel)
        // if (vowelsArray.includes(vowels.toLowerCase()))
        // countTheVowels ++
    }
    return countTheVowels;
}

console.log(vowelsCount("anaemia"));