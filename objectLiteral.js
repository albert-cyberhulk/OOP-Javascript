/** 
 * @filename objectLiteral.js
 * Contains logic with javascript Object Literal OOP patern
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
     * Accessor properties:
     * Configurable -> Makes the property configurable, removable via Delete, and can have dynamic attributes, Default: true
     * Enumerable -> Indicates if the property will be returned in a for-inloop, Default: true
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
        writable: false, //this makes the value writable or not depending if the configurable is set or not
        value: 'Albert',
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
    /**
     * Adding Property name with accessor properties get and set
     * Supports IE9 and higher plus all latest browsers
     * This works only if used accessor properties, better to use 
     * With Configurable not set default to true
     * See example below:
     */
    var person = {
        //The property that should be managed with accessor get property
        //Should be preceded with two underscores before it 
        __name: 'Albert'
    };
    //Adding accessor methods property with accessor methods
    Object.defineProperty(person, 'name', {
       //Defining get method which is called when the property is accessed outside
       get: function() {
           //returns the __name's value + plus custom string
           return 'Knock Knock ' + this.__name + ', Matrix has you!';
       },
       /**
        * Defining set method, which performs defined action when the property is being set outside
        * If this property is omitted then property is not writable by default
        * @param {any value} newValue
        */
       set: function(newValue) {
           //sets Objects name property to newValue param
           this.__name = newValue;
       }
    });
    //Checking logs
    console.log(person.name);//logs Albert
    //Setting person name
    person.name = "Neo";
    //Checking logs
    console.log(person.name);//logs Neo
    
    /**
     * Defining multiple Properties with Data and Accessor properties
     * Since there’s a high likelihood that you’ll need to define more than one property on an object, 
     * ECMAScript 5 provides the Object.defineProperties()method
     * @method Object.defineProperties()
     */
    var person = {
         //Defining property __name which will be accessed from outside
         __name: 'Albert',
         //Defining property age
         age: 28,
         //Defining property job
         __job: 'Software Developer' 
    };
    /**
     * @method Object.defineProperties()
     * @Object person
     * @param {string} name
     * @param {int} age
     * @param {string} job
     */
    Object.defineProperties(person, {
        //Defining accessor property name with getter method
        name: {
          //Getter function  
          get: function() {
            //returns the __name's value + plus custom string
            return 'Knock Knock ' + this.__name + ', Matrix has you!';
          }  
        },
        //accessor property job with getter and setter methods
        job: {
            //Getter function
            get: function() {
                //returns the __job's value + plus custom string
                return 'You are now ' + this.__job + ', Zion needs you!';
            },
            //Seter function sets value of this __job property
            //@param {any value} newValue
            set: function(newValue) {
                //sets Objects __job property to newValue param
                this.__job = newValue;
            }
        }
    });
    //Checking logs
    console.log(person.name);//logs 'Knock Knock Albert, Matrix has you!';
    console.log(person.age);//logs 28
    console.log(person.job);//logs 'You are now Software Developer', Zion needs you!';
    //Assigning new value to name
    person.name = 'Neo';
    //Checking logs
    console.log(person.name);//logs 'Knock Knock Albert, Matrix has you!'; because it has only getter method
    //Assigning new value to job
    person.job = 'The one';
    //Checking logs
    console.log(person.job);//logs 'You are The one', Zion needs you!';
    /**
     * Reading Property Attributes
     * It’s also possible to retrieve the property descriptor for a given property by using the ECMAScript 5 
     * Object.getOwnPropertyDescriptor()method. This method accepts two arguments: the object on 
     * which the property resides and the name of the property whose descriptor should be retrieved. The 
     * return value is an object with properties for configurable, enumerable, get, and setfor accessor 
     * properties or configurable, enumerable, writable, and valuefor data properties. Example 
     */
    //Getting reference to the descripton of person object's property name
    var descriptor = Object.getOwnPropertyDescriptor(person, "__name");
    //Checking logs
    console.log(JSON.stringify(descriptor)); //logs {"value":"Albert","writable":true,"enumerable":true,"configurable":true}
    console.log(descriptor.value);//logs Albert
    console.log(descriptor.configurable);//logs true
    console.log(typeof descriptor.get);//logs undefined, because this is a data Property
    //Getting reference to the descripton of person object's property __name
    var descriptor = Object.getOwnPropertyDescriptor(person, "name");
    //Checking logs
    console.log(JSON.stringify(descriptor)); //los {"enumerable":false,"configurable":false} 
    console.log(descriptor.value);//logs undefined
    console.log(descriptor.configurable);//logs false
    console.log(typeof descriptor.get);//logs function
    console.log(descriptor.get.toString());//logs function () {return 'Knock Knock ' + this.__name + ', Matrix has you!';}
    
})(); //END OF FUNCTION



