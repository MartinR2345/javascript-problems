//Step 1: Create a function name joinTogether that takes in an array of elements. I named this array (arrayOfColors)
//Step 2: Create a variable called commaArray and assigned my parameter(arrayOfColors) with the join() method. This join() method will create and return a new string by concatenating all the elements in an array with a comma.
//Step 3: Print to the console my variable (commaArray)
//Step 4: Execute my joinTogether function as it pass in my arrayofcolors parameter.


function joinTogether(arrayOfColors){
    let commaArray = arrayOfColors.join(',');
    console.log(commaArray);
}

joinTogether(["Red", "Green", "White", "Black"]);