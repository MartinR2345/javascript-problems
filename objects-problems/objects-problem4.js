//Step 1: I created a sample object name "bottle" that has a couple of key-pair values properties
//Step 2: I declare a function name checkItems that takes in two parameters, an object (obj) and a item (item) this function will check to see whether an object contains the specified key
//Step 3: Inside this function, I'm checking to see if the item "temperature" is inside of my sample object "bottle" with the hasOwnProperty() method.  If it is inside of my sample object then it will return true to the console. It is isn't there then it will return false instead
//Step 4: Log to the console my function "checkItems"

const bottle = {
    name : 'Pepsi',
    size : 'small',
    year : 1893,
    type : 'hot chocolate',
    temperature : 'warm',
    condition : 'new',
   
};



const checkItems = (obj, item) => {
    return obj.hasOwnProperty(item);
};

console.log(checkItems(bottle, "temperature"));  //This prints "true" to the console