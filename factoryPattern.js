/** 
 * @filename factoryPattern.js
 * Contains logic with javascript Factory OOP patern
 * @Author Albert Stepanyan
 * @Date(30.10.2013)
 */

/**
 * self called anonym function to encapsulate logic in this scope
 * @returns {undefined}
 */
(function() {
    
    /**
     * The factory pattern is a well-known design pattern used in software engineering to abstract 
     * away the process of creating specific objects. 
     * With no way to define classes in ECMAScript
     * Factory patter encapsulates the creation of object within specific interface
     */
     //Creating person Object using Factory pattern
     /**
      * @method createPerson()
      * @param {string} name
      * @param {int} age
      * @param {string} job
      * @return {Object} person
      */
    function createPerson(name, age, job) {
        //creating new Object with Object Constructor
        var person = new Object();
        //Defining property of person name
        person.name = name;
        //Defining property of person age
        person.age = age;
        //Defining property of person job
        person.job = job;
        //Defining method of person sayName()
        person.sayName = function() {
            //returning name property of person
            return this.name;
        };
        //returning {Object} person
        return person;
    }
    //Creating Instances of person Object through factory pattern
    var person1 = createPerson('Albert', 28, 'Software Developer');
    var person2 = createPerson('Neo', 29, 'The One');
    //As a result we see that we simulated the class creation by having two different instances of the same Object
    //Checking logs
    console.log(person1.name);//logs Albert
    console.log(person1.age);//logs 28
    console.log(person1.job);//logs 'Software Developer'
    console.log(person1.sayName());//logs Albert
    console.log(person2.name);//logs Neo
    console.log(person2.age);//logs 29
    console.log(person2.job);//logs The one
    console.log(person2.sayName());//logs Neo
       
})();//END OF FUNCTION

