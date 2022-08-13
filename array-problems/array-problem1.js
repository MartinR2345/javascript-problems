//Step 1: I create a function called getArrItems that takes in two parameters an array (arrOfItems) and a number (n)
//Step 2: The first thing I'm doing in this function is returning the arrOfItems with the slice method().  This slice() method basically starts at the given start index of 0 which will be the first item and it goes up to "n" but it doesn't include "n".
//Step 3: Why? Because arrays are zero based index meaning the first item starts at index 0. It goes up to "2" but doesn't include "2".
//Step 4: Execute the function getArrItems (['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'], 2) to print to the console.

function getArrItems = (arrOfItems, n) => {
    return arrOfItems.slice(0, n);
}

console.log(getArrItems(['Banana','Orange','Lemon','Apple','Mango'], 2));