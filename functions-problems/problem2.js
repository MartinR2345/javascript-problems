//Goal: What is the objective? To write a function that counts the number of vowels within the string

//Step 1: Create a function name vowelsCount that takes in a string(str) as a parameter and the first thing I'm doing inside this function is,
//Step 2: Declare a variable name currentVowelCount and set it to 0.  This will keep track of counting the vowels after every iteration from my loop
//Step 3: Declare a variable name vowelsArray and this variable will be storing lowercase vowels (a, e, i, o, u) in one place.
//Step 4: I'm using the split() method to split the string into an array of letters and the lowerCase() method to make sure those letters are lowercase.  I save it to a variable called "arrayOfLetters"
//Step 5: I used a for loop to inspect each character of my array of letters to see if it is already inside of my array of vowels and if it is then update my currentVowelCount by one.
//Step 6: Then I'm returning the variable currentVowelCount and logging this to the console my function vowelsCount("How many vowels do you see?") which will give me 9 vowels.


const vowelsCount = (str) => {
    let currentVowelCount = 0;
    
    const arrayOfVowels = ['a', 'e', 'i', 'o', 'u'];
    
    let arrayOfLetters = str.toLowerCase().split("");
    
    for (let i = 0; i < arrayOfLetters.length; i++){
      if(arrayOfVowels.includes(arrayOfLetters[i])){
        currentVowelCount += 1;
      }
    }
    return currentVowelCount;
  }
  
  console.log(vowelsCount("How many vowels do you see?"));
  