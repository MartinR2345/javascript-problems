//Objective: Write a function to sort the following array of objects by title value

//Step 1: Create an array of objects name (books) 
//Step 2: Write a function name sortObjs that takes in two parameters/ two arguments (a) & (b).  These are two elements from the array and it will cycle through my array.  This needs to return a negative number, a positive number or zero. 
//Step 3: In order for me to use the sort() method, I must use an if statement to help me compare the first parameter(a) and the second parameter (b) inside my array of objects (books). If the first parameter/argument (a) should appear before the second parameter/argument (b) then return a number less than zero, a negative number (-1) Now because I’m trying to sort by title value, I must check to see the title value of whatever is passed in from the first parameter(a) is less than the title value of the second parameter(b) and if it is less than then return negative -1. If the first parameter/argument (a) should appear after the second parameter/argument (b) then return a number less than zero, a positive number (1). If the first parameter (a) and the second parameter (b) are equal then return a zero (0)
//Step 4: Print to the object (books) with the sort method applied holding the function (sortObj). This sort method allows me to sort elements of an array in place and even sort elements based on the return value of my (sortObj) function 


const books = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author:'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
  ];
  
  function sortObjs (a, b) {
      if (a.title < b.title) {
        return -1;
      }                              
      else if (a.title > b.title) {             
        return 1;
      }
      else {
          return 0;
      }                               
  }
  
  console.log(books.sort(sortObjs)); 
  