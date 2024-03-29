//Step 1: I create a function called joinTogether that takes in an array of color elements/items.
//Step 2: And inside this function, I'm returning the arrOfColorItems with the join() method that accepts an optional argument separator which is the comma (,) as the default value. 
//Step 3: Why? Because in order to return one string separated by a comma with a space after the comma, the join() method allows me to create and return a new string by concatenating all the elements in the arrOfColorItems and insert a comma in between the string elements.
//Step 4: Print to the console the function joinTogether with the value of arrOfColorItems.


function joinTogether = (arrOfItems) => {
    return arrOfItems.join(',');
}

console.log(joinTogether(["Red", "Green", "White", "Black"]));