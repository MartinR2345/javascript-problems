//Step 1: Create a function name firstTwo that takes two parameters an array(fruits) and a number (n)
//Step 2: Create a variable name slicedArray and assigned my array(fruits) with the slice method to return selected elements in an array as a new array.  This slice() method selects from a given start which is 0 up to a given end which is 2.
//Step 3: Returned the variable "sliceArray"
//Step 4: Execute the function firstTwo (['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'], 2) to print to the console.

function firstTwo(fruits, n){
    let slicedArray = fruits.slice(0, n);
    return slicedArray;
}

console.log(firstTwo(['Banana','Orange','Lemon','Apple','Mango'], 2));