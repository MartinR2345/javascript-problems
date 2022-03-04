//Step 1: Create a function name (sortedArray) that takes in an array which I named as (myArray)
//Step 2: Create a variable name (newArray) and assigned it to my parameter(myArray) and used the sort() method to sort out the elements of (myArray) and return the sorted array
//Step 3: Execute the function sortedArray to print to the console


function sortedArray(myArray){
    let newArray = myArray.sort().reverse();
    return newArray;
}

console.log(sortedArray([-3,8,7,6,5,-4,3,2,1]));