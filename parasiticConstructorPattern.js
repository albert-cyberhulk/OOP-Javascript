/** 
 * @filename parasiticConstructorPattern.js
 * Contains logic for Parasitic Constructor Pattern
 * @author Albert Stepanyan
 */

/**
 * self called anonym function to encapsulate logic in this scope
 * @returns {undefined}
 */
(function() {
    
    /**
     * The parasitic constructor pattern is typically a fallback when the other patterns fail
     * Its basically the same as Factory Pattern but initialized with new Keyword 
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
        //Defining property name
        o.name = name;
        //Defining property age
        o.age = age;
        //Defining property job
        o.job = job;
        //Defining property friends
        o.friends = [];
        /**
         * @method sayName
         * Assigning to External function not to cause memory issues
         * And not to recreate everytime the constructor is called
         * @returns {String} name
         */
        o.sayName = sayName;
        //Returning Object o
        return o;
    }
    /**
     * @method sayName
     * @returns {undefined}
     */
    function sayName() {
        //returning the name property of the Object from which the function is called
        return this.name;
    }
    //Instantiating Constructor Person
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
    //Pushing values to friends property of Object returned by Person
    person2.friends.push('Morpheus');
    person2.friends.push('Trinity');
    person2.friends.push('Neoba');
    //Checking logs
    console.log(person1.friends);//Logs empty array []
    console.log(person2.friends);//Logs ['Morpheus', 'Trinity', 'Neoba']
    
    
})();//END OF FUNCTION
