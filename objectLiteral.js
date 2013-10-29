/** 
 * @filename objectLiteral.js
 * Contains logic with Object Literal javascript OOP patern
 * @Author Albert Stepanyan
 * @Date(29.10.2013)
 */

/**
 * self called anonym function to encapsulate logic in this scope
 * @returns {undefined}
 */
(function() {

    /**
     * Creating New Object person with Object() constructor
     * @param {string} name
     * @param {int} age
     * @param {string} Software age
     * @method {function} sayName
     */
    var person = new Object();
    //Assigning name property to person
    person.name = "Albert";
    //Assigning age property to person
    person.age = 28;
    //Assigning job property to person
    person.job = "Software Engineer";
    /**
     * @method sayName
     * @returns {string} name
     */
    person.sayName = function() {
        //returns the name property of this -> means this object {person}
        return this.name;
    };
    //Checking logs
    console.log(person.name);// logs Albert
    console.log(person.age); //logs 28
    console.log(person.job);//logs Software Engineer
    console.log(person.sayName());
    //Assigning new value to person.job
    person.job = "Team Leader";
    //Checking logs
    console.log(person.job);

    /**
     * Creating New Object person with Object Literal Constructor
     * @param {string} name
     * @param {int} age
     * @param {string} Software age
     * @method {function} sayName
     */
    var person = {
        //Assigning name property to person
        name: "Albert",
        //Assigning age property to person
        age: 28,
        //Assigning job property to person
        job: "Software Engineer",
        /**
         * @method sayName
         * @returns {string} name
         */
        sayName: function() {
            //returns the name property of this -> means this object {person}
            return this.name;
        }
    };
    //Checking logs
    console.log(person.name);// logs Albert
    console.log(person.age); //logs 28
    console.log(person.job);//logs Software Engineer
    console.log(person.sayName());
    //Assigning new value to person.job
    person.job = "Team Leader";
    //Checking logs
    console.log(person.job);

    /**
     * ECMA-262 fifth edition added new characteristics to Object Properties
     * They are described in the following Object nad called Data properties
     * Supports IE8 and higher and all the latest browsers
     * Data propertes:
     * Configurable -> Makes the property configurable, removable via Delete, and can have dynamic attributes, Default: true
     * Enumerable -> Indicates if the property will be returned in a for-inloop, Default: true
     * Writable -> Indicates if the property’s value can be changed, Default: true
     * Value -> Contains the actual data value for the property, Default: undefined
     * Get -> The function to call when the property is read from, Default: undefined
     * Set -> The function to call when the property is written to, Default: undefined.
     * Creating New Object person with Object Literal Constructor
     * @param {string} name
     * @param {int} age
     * @param {string} Software age
     * @method {function} sayName
     */
    var person = {};
    /**
     * @method defineProperty() of Object
     * Assigning name property to person with the help of Object Properties API
     * @param {Object} Object
     * @param {string} Property name
     * @param {Object} {}
     */
    Object.defineProperty(person, 'name', {
        configurable: false, //Setting configurable to false, now it cannot be deleted
        enumerable: false, //Setting enumerable to false, and it won't show up in for in Loop
        writable: false,
        value: 'Albert'
    });
    //Checking logs
    console.log(person.name);//logs Albert
    //Deleting person.name
    delete person.name;
    //Checking logs
    console.log(person.name);//logs Albert
    for(var i in person) {
        console.log(i);//logs name if enumerable is set to true
    }
    //Setting name to Neo
    person.name = "Neo";
    //Checking logs
    /**
     * outputs Neo if no Configurable is set and writable is set to true,
     * if configurable is set or writable is set to false outputs Albert
     */
    console.log(person.name);
    /**
     * If we assign the same property to person Object via Object.defineproperty
     * And previously we have set the configurable to false as in line 102
     * It will throw an error
     * So I will catch it not to break the JS runtime
     */
    try{
        Object.defineProperty(person, 'name', {
            configurable: false, //Setting configurable to true, now it can be deleted
            value: 'Albert'
        }); 
    } catch(ex) {
        console.error('Here we are, and our error is: ' + ex.message);
    }
    
    
})(); //END OF FUNCTION



