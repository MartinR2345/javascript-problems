//Step 1: Create an sample object name person and assigned it three key-value pairs outside of my function
//Step 2: Create a function name removeProperty that takes in two parameters (object, property) and delete a key/property. I choose a property to delete.
//Step 3: Use the delete operator to delete a property from an object as I access my object by using the square brackets property accessor
//Step 4: Return my object parameter
//Step 5: Print to the console my function removeProperty of the object and the property I want to delete

const person = {
    firstName: "Mary",
    lastName: "Bailey",
    age: 35
  };
  
  
  function removeProperty (object, property) {
    delete object[property];
    return object;
    
  }
  
  console.log(deleteOne(person, 'firstName'));