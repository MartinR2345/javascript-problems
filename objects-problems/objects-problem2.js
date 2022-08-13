//Step 1: I create a sample array of people objects with firstName, lastName and age as key-value pairs
//Step 2: I created a function name displayNameInfo that takes in an array of objects "arrOfObjects"
//Step 3: Inside this function, I'm using the forEach() method to loop through each element inside of my array of Objects "arrOfObjects" 
//Step 4: I'm logging to console the first and last names of my array of people's object


const arrOfPeople = [
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

const displayNameInfo = (arrOfObjects) => {
    arrOfObjects.forEach((give) => {
      console.log(give.firstName + ' ' + give.lastName)
    });
}
displayNameInfo(arrOfPeople);