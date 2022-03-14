//Objective: Write a JavaScript function to compute the sum of an array of integers.

//Step 1: Write a function name sumArray that takes in one parameter called (numbers).  This is actually holding my array value.
//Step 2: I create a variable name store and set it equal to zero(0).  This will store the sum of my array.
//Step 3: I used a for loop to loop through my numbers array individually  
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
