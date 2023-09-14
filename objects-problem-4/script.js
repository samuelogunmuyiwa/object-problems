/*Problem 4: Create an object, then write a JavaScript function that checks 
whether an object contains the specified key.*/

const person = {
  firstname : "Mike",
  lastname : "Jackson",
  age : 50,
  description : {
    skinny : true,
    tall : true,
    brownEyes : false,
    darkHair : true
  }
};

//writing a fucntion that can check whether an object contains the specified key

function checkItem(obj, item) {
  return obj.hasOwnProperty(item);
};

console.log(checkItem(person, "age"))