/** 
 * @filename constructorPattern.js
 * Contains logic for mixed Constructor - Prototype Pattern
 * @Author Albert Stepanyan
 */

/**
 * self called anonym function to encapsulate logic in this scope
 * @returns {undefined}
 */
(function() {
    
    
    /**
     * Dynamic pattern includes Object creation with Constructo Pattern
     * Sharing across all instances its methods with Prototype Pattern
     * But Keeping methods in its constructor not to rewrite values and share for every instance
     */
    function Person(name, age, job) {
        //Defining property name;
        this.name = name;
        //Defining property age
        this.job = job;
        //Defining Property Job
        this.age = age;
    }
    /**
     * @method sayName
     * @returns {_L11.Person.name}
     */
    Person.prototype.sayName = function() {
        //returning the name property of Person Object
        return this.name;
    };
    //Instantiating Object Person
    var person1 = new Person('Albert', 28, 'Software Developer');
    var person2 = new Person('Neo', 29, 'The One');
    /**
     * Logging properties results will be different fo person1 and person2
     * Cause Properties have been defined with Constructor Pattern
     */
    //Checling logs
    console.log(person1.name);//Logs Albert
    console.log(person1.age);//Logs 28
    console.log(person1.job);//Logs Software Developer
    console.log(person1.sayName());//Logs Albert
    console.log(person2.name);//Logs Neo
    console.log(person2.age);//Logs 29
    console.log(person2.job);//Logs The One
    console.log(person2.sayName());//Logs Neo
    //Loging Method sayName will show that method sayName is equal on both instances
    console.log(person1.sayName === person2.sayName);//Logs true cause its defined on Prototype of Person and its shared
    
});//END OF FUNCTION


