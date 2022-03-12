
//JS OBJECTIVE: Write a javascript function that displays the number of items and displays the item in the list when you select from the dropdown

//Step 1: Create a new variable name "brandsOfLaptop" and select my laptopBrands element from HTML file
//Step 2: Create a new variable name "numOfItems" and select the number of items inside my "laptopBrands" element and add the length property to it;  Also print to console it as well in order to see the number of items.                    
//Step 3: Create a new variable name "selectMe" so I reference to selected dropdown option and grab it then I access the option's value with the .value 
//Step 4: Create a new variable name "stringOfOptions” and assigned it to an empty string.  This variable “stringOfOptions” will hold/grab our p element 
//Step 5: Create a for loop to loop through the options of a select list and this grabs all the text values


function myFunction() {
    const brandsOfLaptop = document.getElementById("laptopBrands")

    const numOfItems = document.getElementById("laptopBrands").length;     
    console.log(numOfItems);

    const selectedOption = brandsOfLaptop.options[brandsOfLaptop.selectedIndex].value;

    let stringOfOptions = "";

    for (let i = 0; i < brandsOfLaptop.length; i++) {
        stringOfOptions = stringOfOptions + brandsOfLaptop.options[i].text + ", ";
    }

    document.getElementById("demo").innerHTML = stringOfOptions
}