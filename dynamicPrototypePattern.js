/** 
 * @filename dynamicPrototypePattern.js
 * Contains logic for Dynamic Prototype Pattern
 * @Author Albert Stepanyan
 */

/**
 * self called anonym function to encapsulate logic in this scope
 * @returns {undefined}
 */
(function() {
    
    /**
     * Dynamic Prototype Pattern is considered as a Helper for Developers coming from other OOP languages
     * They may Consider the visual separation between the constructor and the prototype confusing
     * So This pattern solves that by encapsulating all the funcitonality within constructor
     * Keeping clear Separation Between COnstrcutor Pattern and Prototype Pattern
     * Shortly Said this is Constructor - Prototype pattern but defined in Constructor for visual purposes
     */
    function Person(name, age, job) {
        //Defining property name;
        this.name = name;
        //Defining property age
        this.age = age;
        //Defining property job
        this.job = job;
        //Defining method sayName in constructor via prototype pattern, previously checking that it does not exist
        if(typeof this.sayName !== "function") {
            /**
             * @mthod
             * returns the name property of Person Object
             * @return {string} name
             */
            Person.prototype.sayName = function() {
                //returning property name of Person
                return this.name;
            };
        }
        //Defining Property friends
        this.friends = []; 
    }
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
    //Pushing one value to the friends property of person2
    person2.friends.push('Morpheus');
    person2.friends.push('Trinity');
    person2.friends.push('Neoba');
    //Checking logs
    console.log(person1.friends);//Logs empty array []
    console.log(person2.friends);//Logs ['Morpheus', 'Trinity', 'Neoba']
        
    
})();//END OF FUNCTION

