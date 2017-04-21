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
