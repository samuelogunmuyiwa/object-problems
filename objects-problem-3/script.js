/*
Problem 3: Create an object with three items in it, then write a JavaScript function that accepts an object and 
tells you the length (tells you how many items are in it) of the object.

*/

const person = {

	firstName : "Larry",
	lastName : "Samuel",
	age : 30
};

function findObjLength(obj) {
	return Object.keys(obj).length;
}

console.log(findObjLength(person));