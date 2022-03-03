//Step 1: Create a function name firstTwo that takes two parameters an array(fruits) and a number (n)
//Step 2: Create a variable name slicedArray and assigned my array(fruits) with the slice method to return selected elements in an array as a new array.  This slice() method selects from a given start which is 0 up to a given end which is 2.
//Step 3: Print to the console the variable "sliceArray"
//Step 4: Execute the function firstTwo (['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'], 2)

function firstTwo(fruits, n){
    let slicedArray = fruits.slice(0, 2);
    console.log(slicedArray);
}

firstTwo(['Banana','Orange','Lemon','Apple','Mango'], 2);