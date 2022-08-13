//Step 1: I declared a sample object name "itemsObj" and this object has three key-value pairs
//Step 2: I created a function name findObjLength that takes in an object(obj) as a parameter
//Step 3: Inside this function I'm calculating or counting how many properties are inside of item's object with the object.keys method and the length method then returning it to the console.
//Step 4: Log to the console of my function "findObjLength" and sample object (itemsObj)

const itemsObj = {
    soda: "pepsi",
    cake: "chocolate",
    snack: "oreos"
  }
  
  const findObjLength = (object) => {
    return Object.keys(object).length;
  }
  
  console.log(findObjLength(itemsObj)); //This prints "3" items
