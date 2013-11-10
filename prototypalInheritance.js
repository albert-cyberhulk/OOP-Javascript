/** 
 * @filename prototypalInheritance.js 
 * Contains logic with Javascript Prototypal Inheritance Pattern
 * @author Albert Stepanyan
 */

/**
 * self called anonym function to encapsulate logic in this scope
 * @returns {undefined}
 */
(function() {
	
	/**
	 * In 2006, Douglas Crockford wrote an article titled “Prototypal Inheritance in JavaScript” in which
	 * he introduced a method of inheritance that didn’t involve the use of strictly defi ned constructors.
	 * His premise was that prototypes allow you to create new objects based on existing objects
	 * without the need for defi ning custom types.
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
	 * Creating Object Author 
	 * With Object Literal
	 * @param {string} name
	 * @param {Array} friends
	 */
	var Author = {
		//defining property name
		name: '',
		//defining property friends
		friends: []
	};
	/**
	 * Instantiating the Object Person
	 * by passing it as a parameter to the function homoSapiens
	 */
	var Albert = homoSapiens(Author);
	var Neo = homoSapiens(Author);
	//Assigning new values to the Instances of the Author Object
	Albert.name = "Albert";
	Neo.name = "Neo";
	//Checking logs
	console.log(Albert.name);//logs Albert cause we overwrite it on the instance Level
	console.log(Neo.name);//logs Neo
	console.log(Author);//logs initial Object cause we do not modify the prototype we just reassign it
	//Pushing new values to the friends Array of Neo Instance
	Neo.friends.push('Morpheus');
	Neo.friends.push('Trinity'); 
	//Checking logs
	console.log(Albert.friends);//logs ['Morpheus', 'Trinity'] cause Author is a prototype of instance and its shared
	console.log(Neo.friends);//logs ['Morpheus', 'Trinity'] cause Author is a prototype of instance and its shared
	/**
	 * So the basic idea is that you have an object Author that we want
	 * to use as the base of another object. That object should be passed into homoSapiens(), and the resulting
	 * object should be modified accordingly. In this example, the Person object contains information that
	 * should be available on another object, so it is passed into the homoSapiens() function, which returns a
	 * new object. The new object has person as its prototype, meaning that it has both a primitive value
	 * property and a reference value property on its prototype. This also means that Person.friends is
	 * shared not only by person but also with Albert and Neo. Effectively, this
	 * code has created two clones of person.
	 */
	
	
})();//END OF THE FUNCTION
