//Objective: Write a function to sort the following array of objects by title value

//Step 1: I create a sample array of objects name (books) 
//Step 2: I'm using the sort() method to sort my array of objects(books) based on the return values of this (a, b) comparison function.
//Step 3: I'm checking to see if "a" is greater than "b" and if it is then return a positive number and placed "b" title before "a" title
//Step 4: I'm also checking to see if "a" is less than "b" and if it is then return a negative number and placed "a" title before "b"title
//Step 5: Return 0 means the position of the compared elements doesn't change
//Step 6: Log to the console of my sample array of objects (books)


const books = [
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
  { author:'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];

books.sort((a, b) => {
   if (a.title > b.title) {
      return 1;
    }                              
    if (a.title < b.title) {             
      return -1;
    }
     return 0
});

console.log(books); 
  