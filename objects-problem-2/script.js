/*
Problem 2: Create an array of people objects with first name, last name, and age, 
then write a JavaScript program to display the first and last name of all the people.
*/

const people = [
  
  {
    firstName : "Kennedy",
    lastName : "Mekus",
    age : 42
  },
  
  {
    firstName : "Michael",
    lastName : "Smith",
    age : 35 
  },
  
  {
    firstName : "Jonathan",
    lastName : "David",
    age : 27 
  },
  
 {
    firstName : "Jonah",
    lastName : "James",
    age : 54
  },
  
   {
    firstName : "Felicia",
    lastName : "Stone",
    age : 26 
  },
  
] 

// Using the array for each() method.
  
  function displayNameInfo(arrayOfObjects) {
    arrayOfObjects.forEach(function(x) {
      console.log(x.firstName + "  " + x.lastName)
    });                
                          
  }

//displayNameInfo(people);