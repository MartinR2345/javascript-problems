//Step 1: Create a function name fizzBuzz() that has no parameters, no arguments and the first thing I'm doing inside this function is,
//Step 2: I create a for loop that loops through the integers from 1 to 100 then 
//Step 3: I declare a variable called "word" and assigned it to an empty strings(""). The length of an empty string("") is 0 and this reduce conditionals and allows me to check two things instead of three things. 
//Step 4: Create an if else statement.  This first if statement will use a modulo operator(%) and logical AND(&&) to check and see if the remainder is equal to zero when it is divided by 3. If it's true, then update the variable "word" to "fizz"
//Step 5: Create an if else statement.  This second if statement will use a modulo operator(%) and logical AND(&&) to check and see if the remainder is equal to zero when it is divided by 5. If it's true, then update the variable "word" to "buzz"
//Step 6: Log to the console of "i" and "word" and call the function fizzBuzz()

const fizzBuzz = () => {
    for(let i = 1; i <= 100; i++){
      let word = "";
      
      if (i % 3 === 0){
        word += 'fizz'
      }
       if (i % 5 === 0){
        word += 'buzz'
      }
      console.log(i, word);
    }
  }
  
  fizzBuzz();