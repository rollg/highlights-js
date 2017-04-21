/**
 * @abstract
 * @constructor
 */
var Animal = function () {
    if (this.constructor === Animal) {
        throw new Error('this is abstract class and can\'t be instantiated');
    }

    this.paws = 4;
};

/**
 * @abstract method
 */
Animal.prototype.say = function () {
    throw new Error('this is abstract method, and cannot be called like that');
};

// console.log(new Animal());
// console.log(Animal.prototype.say());

/*
 * Inherit from abstract class
 * */
var Dog = function () {
    Animal.apply(this, arguments);

    this.name = 'Charlie';
};
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.say = function () {
    console.log('bark, bark');
};
