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
* Module design pattern
* */
console.log(Module.get()); // 0
Module.increase();
console.log(Module.get()); // 1
Module.reset();
console.log(Module.get()); // 0
Module.set(32);
console.log(Module.get());
// Module.nullifyCount(); // main.js:25 Uncaught TypeError: Module.nullifyCount is not a function

/*
* Prototype design pattern
* */
var houseOfCards1 = new HouseOfCards();
var houseOfCards2 = new HouseOfCards();
houseOfCards1.play();
houseOfCards1.stop();
houseOfCards1.distributor = 'Hulu';
console.log(houseOfCards1.distributor);
console.log(houseOfCards2.distributor);
houseOfCards2.play();
houseOfCards2.stop();

/*
 * Singleton
 * */
var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();
var instance3 = Singleton.getInstance();
instance2.increase();
instance3.increase();
console.log(instance1.get()); // 2

/*
* Observer pattern
* */
var subject = new Subject();

var observer0 = new Observer();
var observer1 = new Observer();
var observer2 = new Observer();
var observer3 = new Observer();
var observer4 = new Observer();

subject.subscribeObserver(observer0);
subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.subscribeObserver(observer3);
subject.subscribeObserver(observer4);

subject.notifyAllObservers();
subject.notifyObserver(observer2);
