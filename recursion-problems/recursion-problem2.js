//Objective: Write a JavaScript function to compute the sum of an array of integers.

//Step 1: Create a function name sumOfArray that takes one parameter which would be our array(arr) of integers
//Step 2: I use a if statement to create a condition(base condition) and used as well to prevent infinite recursion.
//Step 3: The else statement is use to check our condition(base condition) over and over until our condition is met or until our condition becomes true. Once that happens the function stops calling itself.
//Step 4: Print to the console the function sumOfArray


function sumOfArray(arr){
  if (arr.length === 0){
      return 0;
  } else{
     return arr.shift() + sumOfArray(arr);
  }
}

console.log(sumOfArray([1,2,3,4,5,6]))


//Step 1: Write a function name sumArray that takes in one parameter called (numbers).  This is actually holding my array value.
//Step 2: I initialize a variable name sum as 0 to store the result 
//Step 3: I used a for loop to loop through my numbers array individually and add them to the sum of the array.  
//Step 4: Return my (sum) variable once the loop is finished and print to the console my function sumArray

function sumArray (numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
      sum += numbers[i]
    }
  return sum;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]))


//shorter way would be:

//Step 1: Write a function name sumArray that takes in one parameter called (numbers).  This is actually holding my array value.
//Step 2: Create a variable name sum and assigned it to my parameter (numbers)
//Step 3: Use or attach the reduce() method on my (numbers) array. This will take my array and reduce it down to a single value.
//Step 4: Return my variable sum and print to the console my function sumArray

function sumArray (numbers){
    const sum = numbers.reduce((a, b) => a + b)
    return sum
}
console.log(sumArray([1, 2, 3, 4, 5, 6]))
