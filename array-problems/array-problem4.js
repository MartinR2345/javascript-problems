//Step 1: I created a function called removeDuplicates that takes in an array of items,
//Step 2: The first thing that I'm doing is creating a variable called "uniqueValuesArr". This is where I'll be storing all the unique values
//Step 3: The second thing I'm doing is creating a loop and in this loop, I'm looping through each item in the array Why?
//Step 4: To check and see if it's not already included in my "uniqueValuesArr" because if it's not that means it is unique which is then why I push it into my "uniqueValuesArr" 
//Step 5: Return my uniqueValuesArr variable
//Step 6: Print to the console the function removeDuplicates with the value of arrayOfNums

function removeDuplicates(arrOfItems) {
    let uniqueValuesArr = [];

    for(let i = 0; i < arrOfItems.length; i++) {
        if(!uniqueValuesArr.includes(arrOfItems[i])){
            uniqueValuesArr.push(arrOfItems[i]);
        };
    };
    return uniqueValuesArr;
};

const arrayOfNums = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]
console.log(removeDuplicates(arrayOfNums)); //This prints [1, 2, 4, 5, 7, 8, 3, 6]
