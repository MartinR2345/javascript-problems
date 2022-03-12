//Step 1: Create an array of people objects with firstName, lastName and age
//Step 2: Create a function name displayFirstAndLastNames that takes in an array of objects which I named as (arrOfObjects)
//Step 3: Then I take the parameter (arrOfArray) and use the for each() method with it.  This will loop over the elements of my array. So whatever function I pass in, that function will be called once per item, where each item will be passed into the function automatically.
//Step 4: Now inside the parenthesis() in my foreach property, this expects me to pass in a callback.  I will use an anonymous function expression that will take in one parameter I called (give)
//Step 5: Print to console the parameter (give) first and last names of all the people of my array of objects 


const people = [
    {
        firstName : 'Martin',
        lastName :   'Jacobs',
        age :  26
    },
    {
        firstName : 'Sophia',
        lastName :   'Marx',
        age :  23
    },
    {
        firstName : 'LeAnn',
        lastName :   'Page',
        age :  24
    }
    
]

function displayFirstAndLastName(arrOfObjects) {
    arrOfObjects.forEach(function(give) {
      console.log(give.firstName + ' ' + give.lastName)
    });
}
displayFirstAndLastName(people);