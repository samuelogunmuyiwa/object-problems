/*Create a sample object, then write a JavaScript function that deletes 
the property of an object passed to it.
*/

const person = {

	firstname : "Steve",
	lastname : "Job",
	age : 60 ,
	sex : "male",
	haircolor : "Brown"

};

// Use the delete keyword to remove the value of the object property(haircolor). 

function removeProperty(object , property) {
	delete object[property];
	return object;
}

console.log(removeProperty(person , "sex"))