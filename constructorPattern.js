/** 
 * @filename constructorPattern.js
 * Contains logic with javascript Constructor OOP patern
 * @Author Albert Stepanyan
 */

/**
 * self called anonym function to encapsulate logic in this scope
 * @returns {undefined}
 */
(function() {
    
    /**
     * constructors in ECMAScript are used to create specific types of 
     * objects. There are native constructors, such as Objectand Array, which are available automatically 
     * in the execution environment at runtime. It is also possible to define custom constructors that define 
     * properties and methods for your own type of object.
     * Constructors are Capitalized functions which can be later instantiated
     */
    //Creating person Object using Constructor pattern
    /**
     * @method Person()
     * @param {string} name
     * @param {int} age
     * @param {string} job
     * @return {undefined}
     */
     function Person(name, age, job) {
         //Defining property of person name
         this.name = name;
         //Defining property of person age
         this.age = age;
         //Defining property of person job
         this.job = job;
         //Defining method of person sayName()
         this.sayName = sayName;
     }
     /**
      * @method sayName
      * Defining external method
      * Because constructor pattern has its Quirks
      * Every time instantiating the Person we recreate every method and property
      * And its not optimal to recreate the same function 
      * So to Avoid this its better to Assign external function to local property and
      * As its called from Person Object this equals to Instance of Person not to window
      * Object
      * @returns {string} name
      */
     function sayName() {
        //returning name property of Person
        return this.name;
     } 
     
    //Creating Instances of person Object through Constructo pattern and adding new keyword
    var person1 = new Person('Albert', 28, 'Software Developer');
    var person2 = new Person('Neo', 29, 'The One');
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
    //Checking the constructors of Person Object instances
    //Checking logs
    console.log(person1.constructor.toString());//logs the stringified version of function Person
    console.log(person2.constructor.toString());//logs the stringified version of function Person
    console.log(person2.constructor == Person);//logs true
    console.log(person2.constructor == Person);//logs true
    console.log(person1 instanceof Object);//logs true
    console.log(person1 instanceof Person);//logs true
    console.log(person2 instanceof Object);//logs true
    console.log(person2 instanceof Person);//logs true
    
    
})();//END OF FUNCTION


