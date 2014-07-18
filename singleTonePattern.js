/**
 * @filename singleTonePattern.js
 * Contains logic with singletone Class implementation in Javascript
 * @author Albert Stepanyan
 */

/**
 * self called anonym function to encapsulate logic in this scope
 * @return {undefined}
 */
/**
 * The Singleton pattern is thus known because it restricts
 * instantiation of a class to a single object.
 * Classically, the Singleton pattern can be implemented by creating
 * a class with a method that creates a new instance of the class if one doesn't exist.
 * In the event of an instance already existing,
 * it simply returns a reference to that object.
 */
(function() {

    /**
     * The Singleton pattern is thus known because it restricts
     * instantiation of a class to a single object.•
     * Classically, the Singleton pattern can be implemented by creating
     * a class with a method that creates a new instance of the class if one doesn't exist.
     * In the event of an instance already existing,
     * it simply returns a reference to that object.
     */
    /**
     * @method Person
     * created by anonym function which is returning singletone object
     */
    var Person = (function() {
        //Instance stores a reference to the SingleTone
        var instance;

        function init() {
            //Private method
            function privateMethod() {
                return "I am Private";
            }
            //Private variables
            var privateVariable = "I am also private";
            var privateRandomNumber = Math.random();
            //returning object for Instance
            return {
                //Public methods and variables
                publicMethod: function() {
                    return "The public can see me";
                },
                publicProperty: "I am also public",
                getRandomNumber: function() {
                    return privateRandomNumber;
                }
            };
        }
        //returning the Person Object
        return {
            //Get the singleTone instance
            //or create if it doesn't
            getInstance: function() {
                if (!instance) {
                    instance = init();
                }
                return instance;
            }
        };

    })();
    //Creating Instances of person Object through singleTone pattern
    var Albert = Person.getInstance();
    var Neo = Person.getInstance();
    console.log(Albert.publicMethod());//Outputs "The public can see me"
    console.log(Neo.publicMethod());//Outputs ""The public can see me"
    console.log(Albert.getRandomNumber() == Neo.getRandomNumber());//Outputs true

})();//END OF FUNCTION

