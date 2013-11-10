/**
 * @filename parasiticInheritance.js
 * Contains logic for Javascript Parasitic Inheritance Pattern
 * @author Albert Stepanyan
 */

/**
 * self called anonym function to encapsulate logic in this scope
 * @returns {undefined}
 */
(function() {

	/**
	 * Closely related to prototypal inheritance is the concept of parasitic inheritance, another pattern
	 * popularized by Crockford. The idea behind parasitic inheritance is similar to that of the parasitic
	 * constructor and factory patterns: create a function that does the inheritance, augments the object
	 * in some way, and then returns the object as if it did all the work.
	 */
	/**
	 * @method homoSapiens
	 * Creating Factory Object that returns
	 * instance of an Object created by Constructor method
	 * @param {Object} o
	 * @return {object} instance
	 */
	function homoSapiens(o) {
		//Creating Constructor Person
		function Person() {}

		//Assigning the o to the prototype of Person
		//Copying all methods and properties of o to the prototype of Person
		Person.prototype = o;
		//returning instance of Person which contains everything that within itself and o
		return new Person();
	}
	/**
	 * Creating Person With Object Literal
	 */
	function createAnother(original) {
		var clone = homoSapiens(original);
		//create a new object by calling a function
		clone.sayName = function() {//augment the object in some way
			return this.name;
		};
		return clone;
		//return the object
	}
	/**
	 * In this code, the createAnother() function accepts a single argument, which is the object to base
	 * a new object on. This object, original, is passed into the object() function, and the result is
	 * assigned to clone. Next, the clone object is changed to have a new method called sayHi(). The
	 * last step is to return the object. The createAnother() function can be used in the following way:
	 */
	var person = {
		name: "Neo",
		friends: ["Morpheus", "Trinity"]
	};
	//Creating Instance of Person
	var anotherPerson = createAnother(person);
	//Checking logs
	console.log(anotherPerson.sayName()); //Logs Neo
	
})();//END OF FUNCTION
