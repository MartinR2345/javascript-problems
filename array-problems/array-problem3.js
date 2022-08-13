//Step 1: I created a function called (sortNumbers) that takes in an array of numbers (arrOfNums)
//Step 2: And inside this function, I'm returning the arr with the sort() method to sort my array (arrOfNums) based on the return values of this (a, b) comparison function
//Step 3: I'm checking to see if a is greater than b and if it is, return a positive number and place "b" before "a".  If a is less than b then return a negative number and placed "a" before "b". The sort() method  will sorts and change the positions of the elements in the original array putting those elements in place. 
//Step 4: Then log to the console of my function sortNumbers. 

const sortNumbers = (arrOfNums) => {
    return arrOfNums.sort((a, b) => {
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0
    });
  }
  
  console.log(sortNumbers([-3,8,7,4,6,5,-4,3,2,1]));


//Step 1: I created a function called (sortNumbers) that takes in an array (arr)
//Step 2: And inside this function, I'm returning the arr with the sort() method and the reverse() method
//Step 3: Why? Because of the elements inside of the original array(arr) are out of place, the sort() method sorts and changes the positions of the elements in the original array putting those elements in place. The reverse() method basically makes the first array element becomes the last, and the last array element becomes the first.
//Step 4: Then print to the console my function sortNumbers with the value of arr 


function sortNumbers(arr){
    return arr.sort().reverse();
}

console.log(sortNumbers([-3,8,7,6,5,-4,3,2,1]));