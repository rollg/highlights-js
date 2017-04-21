/*
* Abstract class
* */
var dog = new Dog();
console.log(dog);
dog.say();
console.log(dog.name);
console.log(dog.paws);
console.log('dog instanceof Animal - ' + (dog instanceof Animal).toString());
console.log('dog instanceof Dog - ' + (dog instanceof Dog).toString());
console.log('typeof dog - ' + (typeof dog).toString());
console.log(typeof Dog);
console.log(Object.getPrototypeOf(dog));

/*
* Module pattern
* */
console.log(Module.get()); // 0
Module.increase();
console.log(Module.get()); // 1
Module.reset();
console.log(Module.get()); // 0
Module.set(32);
console.log(Module.get());
// Module.nullifyCount(); // main.js:25 Uncaught TypeError: Module.nullifyCount is not a function
