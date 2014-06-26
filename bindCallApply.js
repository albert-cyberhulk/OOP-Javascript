/** 
 * @filename bondCallApply.js
 * Contains logic with Javascript bind, apply and call OOP methods
 * @Author Albert Stepanyan
 */

/**
 * self called anonym function to encapsulate logic in this scope
 * @returns {undefined}
 */
(function() {
    
    /**
     * The bind() method creates a new function that,
     * when called, has its this keyword set to the provided value,
     * with a given sequence of arguments preceding
     * any provided when the new function is called.
     */
    var Test = {};
    Test.friends = ["Neo", "Morpheus", "Trinity"];
    /**
     * @method Person 
     * Creating Person Object as a Constructor
     * with a default friends property 
     * filled in with data
     */ 
     function Person() {
        this.friends = ["Neo", "Morpheus", "Trinity", "Neoba"];		
     }
     /**
      * @method sayHello
      * 
      */
     Person.prototype.sayHello = function() {
       console.log(this.friends);  
     };
     //Instantiating Object Person
     var Albert = new Person();
     //Function assign
     var sayHello = Albert.sayHello;
     //Calling Albert.sayHello();
     Albert.sayHello();//Outputs [ 'Neo', 'Morpheus', 'Trinity', 'Neoba' ]
     //Calling sayHello();
     sayHello();//Undefined
     //binding sayHello to window
     var AlbertSayHello = sayHello.bind(Albert);
     AlbertSayHello();//Outputs [ 'Neo', 'Morpheus', 'Trinity', 'Neoba' ]
     //binding sayHello to test
     var testSayHello = sayHello.bind(Test);
     testSayHello();//outputs [ 'Neo', 'Morpheus', 'Trinity' ]
     //Checking with call function
     //Call is used with predefined number of args
     sayHello.call(Albert);//outputs [ 'Neo', 'Morpheus', 'Trinity', 'Neoba' ]
     sayHello.call(Test);//outputs [ 'Neo', 'Morpheus', 'Trinity' ]
     //Checking with Apply function can use array of arguments
     sayHello.apply(Albert);//Outpits [ 'Neo', 'Morpheus', 'Trinity', 'Neoba' ]
     sayHello.apply(Test);//Outputs [ 'Neo', 'Morpheus', 'Trinity' ]
     
     

     
})();//END OF FUNCTION

