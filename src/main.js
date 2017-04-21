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


var dog = new Dog();
console.log(dog);
dog.say();
console.log(dog.name);
console.log(dog.paws);
