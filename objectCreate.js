/** 
 * @filename objectCreate.js 
 * Contains logic with Javascript Object.create Inheritance Pattern
 * @author Albert Stepanyan
 */

/**
 * self called anonym function to encapsulate logic in this scope
 * @returns {undefined}
 */
(function() {
	
	/**
	 * ECMAScript 5 formalized the concept of prototypal inheritance by adding the Object.create()
	 * method. This method accepts two arguments, an object to use as the prototype for a new object and
	 * an optional object defi ning additional properties to apply to the new object. When used with one
	 * argument, Object.create() behaves the same as the object() method:
	 */
	/**
	 * Implementing Prototypal Inheritance with Native Object.create method
	 * The Object.create() method is supported in Internet Explorer 9+, Firefox 4+, Safari 5+, Opera
	 * 12+, and Chrome.
	 */
	var Person = {
		name: '',
		friends: []
	};
	//instantiating Person
	var Albert  = Object.create(Person);
	var Neo = Object.create(Person);
	//Assigning new values to the Instances of the Author Object
	Albert.name = "Albert";
	Neo.name = "Neo";
	//Checking logs
	console.log(Albert.name);//logs Albert cause we overwrite it on the instance Level
	console.log(Neo.name);//logs Neo
	console.log(Person);//logs initial Object cause we do not modify the prototype we just reassign it
	//Pushing new values to the friends Array of Neo Instance
	Neo.friends.push('Morpheus');
	Neo.friends.push('Trinity'); 
	//Checking logs
	console.log(Albert.friends);//logs ['Morpheus', 'Trinity'] cause Author is a prototype of instance and its shared
	console.log(Neo.friends);//logs ['Morpheus', 'Trinity'] cause Author is a prototype of instance and its shared
	
})();//END OF PERSON
