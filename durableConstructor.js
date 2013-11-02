/** 
 * @filename durableConstructor.js
 * Contains logic for Durable Constructor Pattern
 * @Author Albert Stepanyan
 */

/**
 * self called anonym function to encapsulate logic in this scope
 * @returns {undefined}
 */
(function() {
    
    /**
     * Douglas Crockford coined the term durable objectsin JavaScript to refer to objects that have no 
     * public properties and whose methods don’t reference the thisobject.
     * Durable objects are best used in secure environments (those that forbid the use of thisand new)
     * or to protect data from the rest of the application (as in mashups).
     * A durable constructoris a constructor that follows a pattern similar
     * to the parasitic constructor pattern, with two differences: instance methods on the created
     * object don’t refer to this, and the constructor is never called using the newoperator. 
     */
    
    /**
     * @method Person Defining Constructor Person
     * @param {String} name
     * @param {Int} age
     * @param {String} job
     * @returns {_L11.Person}
     */
    function Person(name, age, job) {
         //Defining new Object o
        var o = new Object();
        //Defining private property friends
        var friends = [];
        /**
         * @method sayName
         * Assigning to External function not to cause memory issues
         * And not to recreate everytime the constructor is called
         * @returns {String} name
         */
        o.sayName = function() {
            //returning name property of the Object 
            return name;
        };
        /**
         * @method sayAge
         * @returns {String} name
         */
        o.sayAge = function() {
            //returning age property of the Object 
            return age;
        };
        /**
         * @method sayJob
         * @returns {String} name
         */
        o.sayJob = function() {
          //returning job property of the Object   
          return job;
        };
        /**
         * @method addFriends
         * @returns {undefined}
         */
        o.addFriends = function() {
            //Pushing new Values to friends array of the Object from which the function is called
            friends.push('Morpheus');
            friends.push('Trinity');
            friends.push('Neoba');
        };
        /**
         * @method returnFriends
         * @returns {Array} friends
         */
        o.returnFriends = function() {
           //Returning the friends array of Object from which the function is called
           return friends;
        };
        //Returning Object o
        return o;
    }
    //Instantiating Constructor Person
    var person1 = Person('Albert', 28, 'Software Developer');
    var person2 = Person('Neo', 29, 'The One');
    //Checking logs
    console.log(person1.sayName());//logs Albert
    console.log(person2.sayName());//logs Neo
    console.log(person1.name);//logs undefined as the name is private
    console.log(person2.name);//logs undefined as the name is private
    console.log(person1.sayAge());//logs 28
    console.log(person2.sayAge());//logs 29
    console.log(person1.age);//logs undefined as the age is private
    console.log(person2.age);//logs undefined as the age is private
    console.log(person1.sayJob());//logs Software Developer
    console.log(person2.sayJob());//logs The One
    console.log(person1.job);//logs undefined as the job is private
    console.log(person2.job);//logs undefined as the job is private
    
})();//END OF FUNCTION 

