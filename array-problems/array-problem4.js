//Step 1: Create a function name removeDuplicates that takes one parameter, an array (arr)
//Step 2: Create an empty array use as a default reference
//Step 3: Use a for loop to loop through each and every element of my array
//Step 4: Create an if statement that will check if the specialArray includes or has that element or not.I would be using the includes() method. If not, then if the condition becomes true, then we push that element into the special array with the push() method
//Step 5: Return my specialArray variable
//Step 6: Print to the console the function removeDuplicates 

function removeDuplicates(arr) {
    let specialArray = [];

    for(let i = 0; i < arr.length; i++) {
        if(!specialArray.includes(arr[i])){
            specialArray.push(arr[i]);
        };
    };
    return specialArray;
};

const arrayOfNums = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]
console.log(removeDuplicates(arrayOfNums)); //This prints [1, 2, 4, 5, 7, 8, 3, 6]