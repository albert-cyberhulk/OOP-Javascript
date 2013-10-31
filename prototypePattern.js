/** 
 * @filename factoryPattern.js
 * Contains logic with javascript Prototype OOP patern
 * @Author Albert Stepanyan
 */

/**
 * self called anonym function to encapsulate logic in this scope
 * @returns {undefined}
 */
(function() {

    /**
     * Each function is created with a prototypeproperty, which is an object containing properties and 
     * Methods that should be available to instances of a particular reference type. This object is literally 
     * a prototype for the object to be created once the constructor is called. The benefit of using the 
     * prototype is that all of its properties and methods are shared among object instances.
     */
    //Creating person Object using Constructor pattern
    /**
     * @method Person()
     * @return {undefined}
     */
    function Person() {
    }
    //Defining property of person name
    Person.prototype.name = 'Albert';
    //Defining property of person age
    Person.prototype.age = 28;
    //Defining property of person job
    Person.prototype.job = 'Software Developer';
    /**
     * Defining function sayName to the prototype Object of Person
     * Prototype is basically created with every Constructor function
     * Think of it as a special object var Prototype = {}
     * Which contains special default functionality and logic
     * The advantage of creating a function in prototype is that is not recreated every time
     * Prototypes by nature are shared between instances
     * So if we overwrite some property it will be overwritten for all instances
     * By default, all prototypes automatically get a property called constructor which points in this case to Person()
     * /
    /**
     * @method sayName()
     * @returns {name}
     */
    Person.prototype.sayName = function() {
        //returning property name of Person Object
        //It is available here because actually Prototype Object is a property of Person Object - Function
        //And lookup is done first in prototype if there is a Prototype.name if not looks up in Constructor function
        return this.name;
    };
    //Creating an Instance person1 of Person Object
    var person1 = new Person();
    /**
     * When person1.sayName()is called, a two-step process happens.
     * First, the JavaScript engine asks, “Does the instance person1have a property called sayName?”
     * The answer is no, so it continues the search and asks,
     * “Does the person1prototype have a property called sayName?” The answer is yes, so the
     * function stored on the prototype is accessed. When person2.sayName()is called,
     * the same search executes, ending with the same result.
     */
    //Checking logs
    console.log(person1.sayName());//logs
    //Creating an Instance person2 of Person Object
    var person2 = new Person();
    //Checking logs
    console.log(person2.sayName());//logs Albert
    //Checking whether sayName function is the same for both instances
    //Checking logs 
    console.log(person1.sayName === person2.sayName);//Logs true, because both of them are the same function
    //Checking the relationship of instances to the Person.prototype with method isPrototypeOf() 
    //Checking logs
    console.log(Person.prototype.isPrototypeOf(person1));//logs true, because person1 is an instance of Person
    console.log(Person.prototype.isPrototypeOf(person1));//logs true, because person1 is an instance of Person
    //EcmaScript 5 defines also method getPrototypeOf() to check the prototype of an Object
    //Checking logs
    console.log(JSON.stringify(Object.getPrototypeOf(person1)));//logs theStringified version of Person Object
    console.log(JSON.stringify(Object.getPrototypeOf(person2)));//logs theStringified version of Person Object
    console.log(Object.getPrototypeOf(person1) === Person.prototype);//logs true
    console.log(Object.getPrototypeOf(person2) === Person.prototype);//logs true
    /**
     * If we create a property with name "job" on person1,
     * It will not overwrite the initial property defined on Person.prototype
     * It will just mask it untill that property exeists  
     */
    //Defining property job on person1
    person1.job = 'The one';
    //Checking logs
    console.log(person1.job);//logs The one
    console.log(person2.job);//logs Software Developer
    //Deleting property "job" on person1
    delete person1.job;
    //Checking logs
    console.log(person1.job);//logs Software Developer, cuase now accesses the job in Person.prototype
    /**
     * In order to check whether the property exists on an Instance person1 or on its Prototype Person.prototype
     * EcmaScript Defines hasOwnProperty() method 
     */
    //Checking logs
    console.log(person1.hasOwnProperty('name'));//logs false
    console.log(person2.hasOwnProperty('name'));//logs false
    console.log(Person.prototype.hasOwnProperty('name'));//logs true
    console.log("name" in person1);//logs true because lookup continues to prototype
    
    
})();//END OF FUNCTION

