/** 
 * @filename objectCreateInheritance.js
 * Contains logic with Javascript Combination Inheritance Pattern
 * using with Object.create method
 * @Author Albert Stepanyan
 */

/**
 * self called anonym function to encapsulate logic in this scope
 * @returns {undefined}
 */
(function() {
    
    /**
     * Inheritance is a way to create a class
     * as a specialized version of one or more classes
     * (JavaScript only supports single inheritance). 
     * The specialized class is commonly called the child, 
     * and the other class is commonly called the parent.
     * In JavaScript you do this by assigning an instance of
     * the parent class to the child class, and then specializing it.
     * In modern browsers you can also use Object.create
     * to implement inheritance.
     */
    /**
     * @method Person 
     * Creating Person Object as a Constructor 
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
       Author.prototype = Object.create(Person.prototype);
       //Instantiating Object Author
	var Albert = new Author();
	//Changing constructor pointer
	Albert.constructor = Author;
	//Instantiating Object Author
	var Neo = new Author();
        //Changing constructor pointer
        Neo.constructor = Author;
	//Pushing new value to Person.friends from Anderson instance
	Neo.friends.push('Morpheus');
	Neo.friends.push('Trinity');
	Neo.friends.push('Neoba');
	//Checking logs
	console.log(Albert.friends);//logs empty array []
	console.log(Neo.friends);//logs ['Morpheus', 'Trinity', 'Neoba']
    
})();//END OF FUNCTION
