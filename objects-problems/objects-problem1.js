//Step 1: Create an sample object name person and assigned it three key-value pairs outside of my function
//Step 2: I created a function name removeProperty that takes in two parameters (object, property)
//Step 3: Inside this function I'm using the delete operator to delete a property which is 'firstName' from an 'person' object
//Step 4: Then I'm returning this 'person' object to the console
//Step 5: Log to the console my function removeProperty of the 'person' object and the property 'firstName' I want to delete

const person = {
    firstName: "Mary",
    lastName: "Bailey",
    age: 35
  };
  
  
  const removeProperty = (object, property) => {
    delete object[property];
    return object;
    
  }
  
  console.log(removeProperty(person, 'firstName'));