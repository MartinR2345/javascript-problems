//Step 1: Create a function name joinTogether that takes in an array of elements. I named this array (Colors)
//Step 2: Create an array name (arrayOfColors) and assigned this array with different 


function joinTogether(colors){
    let commaArray = colors.join(',');
    console.log(commaArray);
}

joinTogether(["Red", "Green", "White", "Black"]);