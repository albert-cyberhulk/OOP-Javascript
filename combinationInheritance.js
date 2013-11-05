/** 
 * @filename constructorStealing.js
 * Contains logic with Javascript Combination Inheritance Pattern
 * @Author Albert Stepanyan
 */

/**
 * self called anonym function to encapsulate logic in this scope
 * @returns {undefined}
 */
(function() {
	
   /**
	 * In an attempt to solve the inheritance problem with reference values on prototypes, developers 
	 * began using a technique called constructor stealing
	 * the idea is fairly simple
	 * call the parent object within the context of child
	 * and then Inherit from Parent Object using prototype chaining
	 * this will make possible classical inheritance so that prototypes are shared
	 * among instances and also Constructor pattern where properties defined in the
	 * constructor are not shared among instances
	 */	
	/**
	 * @method Person 
	 * Creating Person Object
	 * with a default friends property 
	 * filled in with data
	 */ 
	function Person() {
		this.friends = [];		
	}
	/**
	 * @method Author 
	 * Creating Child object Author 
	 */
	function Author() {
		/**
		 * if we do not define any context call from here
		 * it will be as standard Prototype chaining inheritance
		 * and property friend of Person will be applied to Author prototype
		 * and will be shared accross instances
		 * but if we call Person from the context of Child Constructor 
		 * Person.call(this); or Person.apply(this);
		 * this in the Person Object will refer to Author not Person
		 * so friends array will not be in Author.prototype but in Author Constructor
		 */
		Person.call(this);
	}
	//Inheriting from Person 
	Author.prototype = new Person();
	/**
	 * @method Neo
	 * Creating Child object Neo
	 */
	//Instantiating Object Author
	var Albert = new Author();
	//Changing constructor pointer
	Albert.constructor = Author;
	//Instantiating Object Author
	var Neo = new Author();
	//Pushing new value to Person.friends from Anderson instance
	Neo.friends.push('Morpheus');
	Neo.friends.push('Trinity');
	Neo.friends.push('Neoba');
	//Checking logs
	console.log(Albert.friends);//logs empty array []
	console.log(Neo.friends);//logs ['Morpheus', 'Trinity', 'Neoba']
	
})();//END OF FUNCTION
