/**
 * @filename parasiticCombinationInheritance.js
 * Contains logic for Javascript Parasitic Combination Inheritance Pattern
 * @author Albert Stepanyan
 */

/**
 * self called anonym function to encapsulate logic in this scope
 * @returns {undefined}
 */
(function() {

	/**
	 * Combination inheritance is the most often-used pattern for inheritance in JavaScript, though
	 * it is not without its ineffi ciencies. The most ineffi cient part of the pattern is that the supertype
	 * constructor is always called twice: once to create the subtype’s prototype, and once inside the
	 * subtype constructor. Essentially, the subtype prototype ends up with all of the instance properties of
	 * a supertype object, only to have it overwritten when the subtype constructor executes.
	 * Parasitic combination inheritance uses constructor stealing to inherit properties but uses a hybrid
	 * form of prototype chaining to inherit methods.
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
	 * @method inheritPrototype
	 * Accepts to Constructors and
	 * @param {Object} author
	 * @param {Object} person
	 */
	function inheritPrototype(author, person) {
		var prototype = homoSapiens(person.prototype);
		//create object
		prototype.constructor = author;
		//augment object
		author.prototype = prototype;
		//assign object
	}
	/**
	 * @method Person
         * @param {Object} name
	 */
	function Person(name) {
		//Defining Property name
		this.name = name;
		//Defining Property friends 
		this.friends = ["Morpheus", "Neo"];
	}
	/**
	 * @method sayName
	 * @return {string} name 
	 */
	Person.prototype.sayName = function() {
		return this.name;
	};
	/**
	 * @method Author 
 	 * @param {Object} name
 	 * @param {Object} age
	 */
	function Author(name, age) {
		Person.call(this, name);
		this.age = age;
	}
        //Inheriting Process
	inheritPrototype(Author, Person);
	/**
	 * @method sayAge
	 * @return {String} age
	 */
	Author.prototype.sayAge = function() {
		return this.age;
	};
	//Instantiating Author
	var Albert = new Author('Albert', 28);
	var Neo = new Author('Neo', 29);
	//Checking logs
	console.log(Albert.sayAge());//Logs 28
	console.log(Neo.sayAge());//Logs 29
	
})();//END OF FUNCTION
