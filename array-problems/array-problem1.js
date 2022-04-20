//Step 1: Create a function name getArrItems that takes two parameters an array and a number (n)
//Step 2: Create a variable name slicedArray and assigned my array(fruits) with the slice method to return selected elements in an array as a new array.  This slice() method selects from a given start which is 0 up to a given end which is 2.
//Step 3: Returned the variable "sliceArray"
//Step 4: Execute the function firstTwo (['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'], 2) to print to the console.

function getArrItems(arr, n){
    return arr.slice(0, n);
}

console.log(getArrItems(['Banana','Orange','Lemon','Apple','Mango'], 2));