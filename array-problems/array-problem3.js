//Step 1: I created a function called (sortNumbers) that takes in an array (arr)
//Step 2: And inside this function, I'm returning the arr with the sort() method
//Step 3: Why? Because of the elements inside of the original array(arr) are out of place, the sort() method sorts and changes the positions of the elements in the original array putting those elements in place. 
//Step 4: Then print to the console my function sortNumbers with the value of arr 


function sortNumbers(arr){
    return arr.sort();
}

console.log(sortNumbers([-3,8,7,6,5,-4,3,2,1]));




//Step 1: I created a function called (sortNumbers) that takes in an array (arr)
//Step 2: And inside this function, I'm returning the arr with the sort() method and the reverse() method
//Step 3: Why? Because of the elements inside of the original array(arr) are out of place, the sort() method sorts and changes the positions of the elements in the original array putting those elements in place. The reverse() method basically makes the first array element becomes the last, and the last array element becomes the first.
//Step 4: Then print to the console my function sortNumbers with the value of arr 


function sortNumbers(arr){
    return arr.sort().reverse();
}

console.log(sortNumbers([-3,8,7,6,5,-4,3,2,1]));