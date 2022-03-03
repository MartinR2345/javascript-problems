//Step 1: Create a paragraph <p> tag and a <button> tag and a link tag in HTML file
//Step 2: Give the link tag an id name, called targetLink and I added youtube's website as the href. This href is used to identify sections within a document. 
//Step 3: Give <button> element an onclick event and an id name, called goToLink()
//Step 4: In my Javascript file, write a function name goToLink() and inside of the curly braces, I'm going to use the the getElementByID to target my "targetLink" from my link tag as well as get the attribute "href" of that link. Also I save it to a variable name "myLink".  I made sure to target my p1 element innerHTML which will be connected to my save variable "myLink"

function goToLink() {
    const mylink = document.getElementById('targetLink').getAttribute('href');
    document.getElementById('p1').innerHTML = mylink;
}