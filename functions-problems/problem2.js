//Goal: What is the objective? To write a function that counts the number of vowels within the string

//Step 1: Create a function name vowelsCount that accepts a String(str) as a parameter
//Step 2: Create a variable name currentVowelCount and set it to 0.  This will keep track of counting the vowels after every iteration from my loop
//Step 3: Create an variable name vowelsArray that will store the vowels in one place.
//Step 4: Create a loop that will inspect each character of my string(str). Why? This is checking to see if any letters in my string are a vowel or not. If it is, then currentVowelCount will be updated by 1.
//Step 5: Return the variable currentVowelCount and print to console my function vowelCount("anaemia") which will give me 5 vowels.


function vowelsCount(str){
    let currentVowelCount = 0;
    const vowelsArray = ['a', 'e', 'i', 'o', 'u'];
    for (let arrOfLetters of str){
        if (vowelsArray.includes(arrOfLetters.toLowerCase()))
        currentVowelCount ++
    }
    return currentVowelCount;
}

console.log(vowelsCount("anaemia"));