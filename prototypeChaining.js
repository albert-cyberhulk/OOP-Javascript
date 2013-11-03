/** 
 * @filename prototypeChaining.js
 * Contains logic for Javascript Prototype Chaining Inheritance Pattern
 * @Author Albert Stepanyan
 */

/**
 * self called anonym function to encapsulate logic in this scope
 * @returns {undefined}
 */
(function() {
    
   /**
    * ECMA-262 describes prototype chainingas the primary method of inheritance in ECMAScript. 
    * The basic idea is to use the concept of prototypes to inherit properties and methods between two 
    * reference types. Recall the relationship between constructors, prototypes, and instances: each 
    * constructor has a prototype object that points back to the constructor, and instances have an 
    * internal pointer to the prototype. What if the prototype were actually an instance of another type? 
    * That would mean the prototype itself would have a pointer to a different prototype that, in turn, 
    * would have a pointer to another constructor. If that prototype were also an instance of another 
    * type, then the pattern would continue, forming a chain between instances and prototypes. This is 
    * the basic idea behind prototype chaining.
    */
   /**
    * Defining our Person Object using Prototype Chaining Patterns
    * Lets consider this as a Aconstructor which defines Objects
    * @param {string} name
    * @param {int} age
    * @param {string} job
    */
   function Person(name, age, job) {
       //Defining Property name as an empty string
       this.name = name;
       //Defining property age  as an empty string
       this.age = age;
       //Defining property job as an empty string
       this.job = job;
       //Defining property friends
       this.friends = [];
   }
   /**
    * @method sayName
    * @return {string}
    */
   Person.prototype.sayName = function() {
       //returning name Property of Person
       return this.name;
   };
   /**
    * Defining Object Constructor Author
    * Logically Author is also a human being and of course a person
    * So Author can inherit from Person  
    */
   function Author() {
       //We can do here like
       //this.name
       //this.age
       //this.job
       //Blah Blah Blah, but that's not optimal, and As I am a lazy Developer
       //I would not do that
       //So I would better inherit some from Person
       //Defining property mindType
       this.mindType = '';
   }
   /**
    * Here we go, now I Author will inherit everything I can from Person Object
    * Using Prototype Chain Inheritance
    * I will Inherit everything From Person by Making My Prototype
    * Author.prototype be actually the instance of a Person
    * Which means that if the instance has an access to everything that is encapsulated in Person
    * And Person Prototype, means that my Prototype Author.prototype being an instance of Person
    * Has access to everything Pattern Child.prototype = new Parent(); Inheritance without Chromosomes
    * Only Programmatically!
    */
   Author.prototype = new Person('Albert', 28, 'Software Developer');
   /**
    * Lets add one method to me Author
    * @method freeYourMind()
    */
   /**
    * Remember you must add methods to child Objects
    * Only after Inheritance takes place
    * So just rememeber to inherit
    * Then assign anything you want to prototypes Of Child Objects
    */
   Author.prototype.freeYourMind = function() {
     //Changing mindType of an Author
     this.mindType = 'free';
   };
   //Instantiating Author Object
   var Albert = new Author();
   /**
    * Now Logically I should have access to everything
    * This how it works:
    * Example accessing Albert.name
    * Person Object inherites from Native Object which enables all features provided by ECMA-262
    * Author Object Inherites From Person Object
    * So accessing Albert.name starts the search first in Albert instance
    * Then continues search to Author.prototype
    * Then continues search in Author itself
    * Then continues search in Person.prototype
    * Then continues search in Person itself
    * Then finally in Object
    * Yes Exciting !
    */
   //Checking logs
   console.log(Albert.name);//logs Albert, cause there is a name property in Person
   console.log(Albert.age);//logs 28, cause there is an age property in Person
   console.log(Albert.job);//logs Software Developer, cause there is an job property in Person
   //Changing the mindType property of Albert
   Albert.freeYourMind();
   //Checking logs
   console.log(Albert.mindType);//logs free
   console.log(Albert.sayName());//logs Albert
   console.log(Albert.constructor);//logs Person Object as function
   //So if you are so strict about defining right constructor pointers do the following:
   Albert.constructor = Author;
   console.log(Albert.constructor);//logs Author Object as function
   console.log(Object.prototype.isPrototypeOf(Person.prototype));//logs true
   console.log(Person.prototype.isPrototypeOf(Author.prototype));//logs true
   console.log(Person.prototype.isPrototypeOf(Albert));//logs true
   console.log(Albert instanceof Author);//logs true
   console.log(Albert instanceof Person);//logs true
   console.log(Albert instanceof Object);//logs true
   console.log(Author.prototype instanceof Person);//;logs true
   console.log(Albert.hasOwnProperty('mindType'));//logs true
   console.log(Albert.hasOwnProperty('name'));//logs false
   console.log(Albert.hasOwnProperty('age'));//logs false
   console.log(Albert.hasOwnProperty('job'));//logs false
   //pushing new values to freinds of Person
   Albert.friends.push('Nickolas Zakas, Douglas Crowkford, John Reisig, Ryan Dahl');
   //Checking logs 
   console.log(Albert.friends);//logs ['Nickolas Zakas, Douglas Crowkford, John Reisig, Ryan Dahl']
   /**
    * Here we came slightly to the quirks of prototype Chain Inheritance
    * We know that putting properties into protypes makes them shared within instances
    * Which is not so good, so we solved that by putting them in constructors
    * Ok but not in this case cause when we make prototype Chain inheritance 
    * the prototype actually becomes an instance of another type, meaning 
    * that what once were instance properties are now prototype properties
    */
    //Instantiating the Object Author with Our Neo
    var Neo = new Author();
   //Checking logs
   console.log(Neo.friends);//logs logs ['Nickolas Zakas, Douglas Crowkford, John Reisig, Ryan Dahl']
   /**
    * This happens because Author.prototype equals to new Instance of Person
    * So friends array is now a property of a prototype and of course becomes shared
    * Its changing its behaviour and when we access Instance.friends 
    * It looks up in prototype of Author not in Person itself
    */
   
})();//END OF FUNCTION


