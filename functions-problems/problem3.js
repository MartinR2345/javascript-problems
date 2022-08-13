//Goal: What is the objective? Write a function that will count the number of occurrences of the specified letter within the string.

//Step 1: I created a function called letterCount that takes in two arguments/parameters a string(str) and a letter(letter).  Inside this function
//Step 2: Declare a variable name currentLetterCount and set it to 0. This will keep track of counting the letters after every iteration from forEach() method
//Step 3: This forEach() method will inspect each letter one by one to check and see if the letter "a" matches a letter in my letter in array variable then update "currentLetterCount" by one.
//Step 4: Return the currentLetterCount and log to the console my function letterCount("Apples oranges mangos pear", "a") which will give me "4"


const letterCount = (str, letter) => {
    let currentLetterCount = 0;
    
    const arrayOfLetters = str.split("");
    
    arrayOfLetters.forEach((letterInArray) => {
      if(letterInArray.toLowerCase() === letter.toLowerCase()) {
        currentLetterCount += 1;
      }
    })
        return currentLetterCount
  }
  
  
  console.log(letterCount("Apples oranges mangos pear", "a"));

