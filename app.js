// 'use strict';

// ---------------------------------------------------------------------------- //
// group together different values.
// here we will define an object named person:

// const person = {
//     firstName: 'Barry',
//     lastName: 'Mitchell',
//     birthYear: 1977,
//     skills: ['JS', 'AWS', 'Dockers', 'Python'],
//     employed: true,
// };

// // here is another way:
// const teacher = {}  // an empty object.
// // now we can assign properties to our empthy object:
// teacher.fullName = "michael adams";
// teacher.age = 46;

// // key value
// // collections of properties
// // ordered alphabetically
// console.log(person);

// // accessing values
// console.log(person.firstName);
// console.log(person['firstName']);

// console.log(teacher.fullName);
// console.log(teacher.age);

// // accessing invalid key
// console.log(person.midName);
// console.log(person['midName']);


// ---------------------------------------------------------------------------- //
// // let's improve our first object, person:
// const person = {
//     firstName: 'Barry',
//     lastName: 'Mitchell',
//     birthYear: 1977,
//     skills: ['JS', 'AWS', 'Dockers', 'Python'],
//     employed: true,
//     // later
//     2021: 'Clarusway',
//     true: 'is it working?',
// };

// // console.log(person.2021);
// console.log(person['2021']);
// const year = 2021;
// console.log(person[year]);
// console.log(person.year);

// console.log(person.true);

// const keyTag = 'Name';
// console.log(person['first' + keyTag]); // by using this notation, we can access calculated properties of our objects.

// const askedKey = prompt('Which key?');
// console.log(person[askedKey] || 'invalid key');



// ---------------------------------------------------------------------------- //
// // modifing objects
// // updating
// console.log(person.birthYear);
// person.birthYear = 1978;
// console.log(person.birthYear);

// // adding property
// console.log(person.midName);
// person.midName = 'Alexis';
// console.log(person.midName);

// // be carefull for typos!  
// // lets try to change lastName...
// person.lastnme = 'Brown';
// console.log(person);

// // deleting
// console.log(person.lastName);
// delete person.lastName;
// console.log(person.lastName);


// ---------------------------------------------------------------------------- //
// // nested array and objects
// // optional
// const comments = [
//     { username: 'Barry', comment: 'Bla Bla Bla', votes: 92 },
//     { username: 'Tom', comment: 'new comment', votes: 102 },
// ];


// ---------------------------------------------------------------------------- //
// // looping on objects
// for (let item of Object.keys(person)) {
//     console.log(item);
// }

// for (let item of Object.values(person)) {
//     console.log(item);
// }

// // you cannot use the following syntax!
// for (let item of Object(person)) console.log(item);
// console.log(person);



// ---------------------------------------------------------------------------- //
// // // let's improve our first object, person more:
// const person = {
//     firstName: 'Barry',
//     lastName: 'Mitchell',
//     birthYear: 1977,
//     skills: ['JS', 'AWS', 'Dockers', 'Python'],
//     employed: true,
//     // later
//     2021: 'Clarusway',
//     true: 'is it working?',

//     // wrong version
//     calcAgeBad: function (bYear) {
//         return 2021 - bYear;
//     },

//     // wright version
//     calcAge: function () {
//         console.log(this);  // what is THIS?
//         this.age = 2021 - this.birthYear;
//         return this.age;
//     },
//     calcAgeShortVer() {
//         const currentYear = new Date().getFullYear();
//         return currentYear - this.birthYear; 
//     }
// };

// methods
// console.log(person.calcAgeBad(1977));
// console.log(person.age);
// console.log(person.calcAge());
// console.log(person.age);

// console.log(person.calcAgeShortVer());

// // this
// console.log(this);

// const calcAge = function (birthYear) {
//     console.log('Regular Function in Global Scope');
//     console.log(this);
//     console.log(2021 - birthYear);
// };

// calcAge(1977);

// const calcAgeArrow = (birthYear) => {
//     console.log('Arrow Function in Global Scope');
//     console.log(this);
//     console.log(2021 - birthYear);
// };

// calcAgeArrow(1977);

// add "use strict" at the beginning...



// ---------------------------------------------------------------------------- //
// const teacher = {
//     birthYear: 1977,
//     calcAge: function () {
//         console.log('Regular Function in Object');
//         console.log(this);
//         console.log(2021 - this.birthYear);
//     },
//     calcAgeArrow: () => {
//         console.log('Arrow Function in Object');
//         console.log(this);
//         console.log(2021 - this.birthYear);
//     },
//     calcAgeDelayed: function () {
//         setTimeout(function () {
//             console.log('Regular Function in setTimeout');
//             this.calcAge();
//         }, 3000);
//     },
//     calcAgeDelayedArrow: function () {
//         setTimeout(() => {
//             console.log('Arrow Function in setTimeout');
//             console.log(this);
//             this.calcAge();
//         }, 3000);
//     },
// };

// teacher.calcAge();
// teacher.calcAgeArrow();

// const student = {
//     nickName: "Tina",
//     birthYear: 1990,
// };

// student.calcAge = teacher.calcAge;

// student.calcAge();

// let's create a new object from our person object:

// // let's improve our first object, person more:
// const person = {
//     firstName: 'Barry',
//     lastName: 'Mitchell',
//     birthYear: 1977,
//     skills: ['JS', 'AWS', 'Dockers', 'Python'],
//     employed: true,
//     // later
//     2021: 'Clarusway',
//     true: 'is it working?',

//     // wrong version
//     calcAgeBad: function (bYear) {
//         return 2021 - bYear;
//     },

//     // wright version
//     calcAge: function () {
//         console.log(this);  // what is THIS?
//         this.age = 2021 - this.birthYear;
//         return this.age;
//     },
//     calcAgeShortVer() {
//         const currentYear = new Date().getFullYear();
//         return currentYear - this.birthYear; 
//     }
// };

// const newPerson = person;

// // now, be careful!!!
// console.log(newPerson);
// newPerson.firstName = "qqqqqq";
// console.log(newPerson.firstName);
// console.log(person.firstName);



// ---------------------------------------------------------------------------- //
// // destructuring objects
// // recap:
// const myArray = [1, 2, 3, 4, 5, 6, 7];
// let [x, y, z] = myArray
// console.log(x, y, z);

// let [a, b, ...allOthers] = myArray;
// console.log(a, b);
// console.log(allOthers);

// let [qq, , ww, ...allOthers2] = myArray;
// console.log(qq, ww);
// console.log(allOthers2);


// const hotel = {
//     name: 'Hotel Clarusway',
//     categories: ['Spa', 'Swimming Pool', 'Resort'],
//     options: ['just stay', 'free breakfast', 'all inclusive'],
//     rooms: ['2-bed', '3-bed', '4-bed'],
//     receptionHours: {
//         mon: {
//             open: 8,
//             close: 22,
//         },
//         fri: {
//             open: 9,
//             close: 21,
//         },
//         sat: {
//             open: 10,
//             close: 20,
//         },
//     },

//     // book: function (obj) {
//     // console.log(obj)
//     book: function ({ arrival, departure, optionIndex = 0, roomIndex = 0 }) {
//         console.log(
//             `${this.rooms[roomIndex]} is booked with ${this.options[optionIndex]} between ${arrival}-${departure}`
//         );
//     },
// };


// // it takes from keys... 
// const { name, options, rooms } = hotel;
// console.log(name, options, rooms);

// // keys should be matched.
// const { test } = hotel;
// console.log(test);

// // we can give default values... 
// const { name, options, rooms, test = "not available" } = hotel;
// console.log(name, options, rooms, test);


// // we can change the names of our newly created variables. attention: for access, must use the same property name...
// const { name: hotelName, options: hotelOptions, rooms: hotelRooms } = hotel;
// console.log(hotelName, hotelOptions, hotelRooms);

// // changing variable names, similar result
// const {
//     name: hotelName,
//     options: hotelOptions,
//     rooms: hotelRooms = ['no data'],
// } = hotel;
// console.log(hotelName, hotelOptions, hotelRooms);


// *************** optional ******************* //
// // mutating obj
// // optional
// let x = 10;
// let y = 5;
// const obj = { x: 1, y: 2, z: 3 };
// ({ x, y } = obj);
// console.log(x, y);
// *************** optional ******************* //



// // nested objects
// const { mon } = hotel.receptionHours;
// console.log(mon);

// // for accessing the inner objects (nested):
// const {
//     fri: { open, close },
// } = hotel.receptionHours;
// console.log(open, close);  // we created two new variables...


// *************** optional ******************* //
// // function objects param
// // optional
// hotel.book({
//     roomIndex: 0,
//     optionIndex: 1,
//     departure: '22:00',
//     arrival: '10:00',
// });

// // spead opr with objects

// let newHotel = { ...hotel };
// newHotel = hotel;
// newHotel.name = 'new name';
// console.log(newHotel.name);
// console.log(hotel.name);

// // rest opeations with obj
// const { sat, ...weekdays } = hotel.receptionHours;
// console.log(sat, weekdays);

// if (hotel.book) {
//     hotel.book({
//         roomIndex: 0,
//         optionIndex: 1,
//         departure: '22:00',
//         arrival: '10:00',
//     });
// }

// hotel.book &&
//     hotel.book({
//         roomIndex: 0,
//         optionIndex: 1,
//         departure: '22:00',
//         arrival: '10:00',
//     });
// *************** optional ******************* //


// // short circuting

// console.log(hotel);
// const guests = hotel.numGuests
// console.log(guests);

// const guests1 = hotel.numGuests ? hotel.numGuests : 40;
// console.log(guests1);

// const guests2 = hotel.numGuests || 50;
// console.log(guests2);

// // nullish coalescing operator ES2020
// // null and undefined
// hotel.numGuests = 0;
// const guests3 = hotel.numGuests || 50;
// console.log(guests3);

// const guests4 = hotel.numGuests ?? 50;
// console.log(guests4);

// // enhanced object literals
// // functions definition
// // property from outside
// // calculating keys

// chaining
// console.log(hotel.receptionHours.mon.open);

// console.log(hotel.receptionHours.tue.open);  // if we don't know than we can use a question mark...

// console.log(hotel.receptionHours.tue?.open);

// if (hotel.receptionHours.tue) {
//     console.log(hotel.receptionHours.tue.open);
// } else {
//     console.log('no such property');
// }

// if (hotel.receptionHours && hotel.receptionHours.tue) {
//     console.log(hotel.receptionHours.tue.open);
// }

// console.log(hotel.receptionHours.tue?.open);
// console.log(hotel.receptionHours?.tue?.open);

// looping
// for (const key of Object.keys(hotel)) console.log(key);

// for (const key of Object.values(hotel)) console.log(key);

// for (const key of Object.entries(hotel)) console.log(key);




// // // prototype
// const arr = [1, 3, 5, 7];


// const person = {
//     firstName: 'Barry',
//     lastName: 'Mitchell',
//     birthYear: 1977,
//     skills: ['JS', 'AWS', 'Dockers', 'Python'],
//     employed: true,
//     // later
//     2021: 'Clarusway',
//     true: 'is it working?',

//     // wrong version
//     calcAgeBad: function (bYear) {
//         return 2021 - bYear;
//     },

//     // wright version
//     calcAge: function () {
//         console.log(this);  // what is THIS?
//         this.age = 2021 - this.birthYear;
//         return this.age;
//     },
//     calcAgeShortVer() {
//         const currentYear = new Date().getFullYear();
//         return currentYear - this.birthYear; 
//     }
// };

// // on console show proto section for both arr and person...
// Array.prototype.push = function() {
//     console.log("this is my push method !!!")
// }
// arr.push(11);

// const arr2 = [4, 6, 8, 10];
// arr2.push(12);


// //String.prototype is a "template object" for every single string.
// //We could go crazy and add our own method called yell...
// String.prototype.yell = function () {
//     return `OMG!!! ${this.toUpperCase()}!!!!! AGHGHGHG!`;
// };

// 'bees'.yell(); //"OMG!!! BEES!!!!! AGHGHGHG!"

// //We can overwrite an existing Array method like pop (not a good idea):
// Array.prototype.pop = function () {
//     return 'SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!';
// };
// const nums = [6, 7, 8, 9];
// console.log(nums.pop()); // "SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!"

// //This function makes and returns an object every time it is called.
// // The resulting objects all follow the same "recipe"

// function makeColor(r, g, b) {
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function () {
//         const { r, g, b } = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     };
//     color.hex = function () {
//         const { r, g, b } = this;
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     };
//     return color;
// }

// const firstColor = makeColor(35, 255, 150);
// console.log(firstColor);
// firstColor.hex(); //firstColor.hex();
// firstColor.rgb(); //"rgb(35, 255, 150)"
// console.log(firstColor.hex());
// console.log(firstColor.rgb());


const div1 = document.getElementById('mydiv1');
const div2 = document.getElementById('mydiv2');

// // div1.style.backgroundColor = firstColor.hex();

// // const black = makeColor(0, 0, 0);
// // black.rgb(); //"rgb(0, 0, 0)"
// // black.hex(); //"#0000s00"

// // div2.style.backgroundColor = black.rgb();


// // This is a Constructor Function...
// // Be careful with naming convention. name starts with capital letter.
// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     this.test = function () {
//         console.log('test');
//     };
// }

// //If you call it on its own like a regular function...
// Color(35, 60, 190); //undefined
// //It returns undefined. Seems useless!

// console.log(Color(55,55,55))

// const myColor = new Color(255,55,55);

// console.log(myColor);

// // // *****************
// // // THE NEW OPERATOR!
// // // *****************

// // // 1. Creates a blank, plain JavaScript object;
// // // 2. Links (sets the constructor of) this object to another object;
// // // 3. Passes the newly created object from Step 1 as the this context;
// // // 4. Returns this if the function doesn't return its own object.

// Color.prototype.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`;
// };

// Color.prototype.hex = function () {
//     const { r, g, b } = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };

// Color.prototype.rgba = function (a = 1.0) {
//     const { r, g, b } = this;
//     return `rgba(${r}, ${g}, ${b}, ${a})`;
// };

// const color1 = new Color(40, 255, 60);
// color1.hex();
// const color2 = new Color(0, 0, 0);
// color2.hex();

// console.log(color1);
// console.log(color2);

// div1.style.backgroundColor = color1.rgb();
// div2.style.backgroundColor = color2.hex();

// // without using new, it does not create an object.
// // new keyword create the relationship of "this" in the constructor function.
// const color3 = Color(0,0,0);
// console.log(color3);

// color1.test();

// // if you write the function inside the constructor function, it will not be added to proto. why this is important? if it is in the prototype then there will be only one copy, on the other hand, for each object, the function will be created seperately.

// console.log(color1.test === color2.test);  // false
// console.log(color1.rgb === color2.rgb);  // true





// using class


// class ColorClass {
//   constructor(r, g, b, name) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     this.name = name;
//   }
 
//   rgb() {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`;
//   }
//   rgba(a = 1.0) {
//     const { r, g, b } = this;
//     return `rgba(${r}, ${g}, ${b}, ${a})`;
//   }
//   hex() {
//     const { r, g, b } = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   }
// }
// const red = new ColorClass(255, 67, 89, 'tomato');
// const white = new ColorClass(255, 255, 255, 'white');
 
// div1.style.backgroundColor = red.rgba(0.3);

// // all the functions go automatically to the prototype section of our class. different than object.
// console.log(red);

// // static

// // we can add static methods, however these methods are not included in the instances. just in the class itself.
// // for checking the static method call on console: > ColorClass.test()
// class ColorClass {
//     constructor(r, g, b, name) {
//       this.r = r;
//       this.g = g;
//       this.b = b;
//       this.name = name;
//     }
   
//     rgb() {
//       const { r, g, b } = this;
//       return `rgb(${r}, ${g}, ${b})`;
//     }
//     rgba(a = 1.0) {
//       const { r, g, b } = this;
//       return `rgba(${r}, ${g}, ${b}, ${a})`;
//     }
//     hex() {
//       const { r, g, b } = this;
//       return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     }
//     static test() {
//         console.log("this is a static method...");
//     }
//   }

//   const red = new ColorClass(255, 67, 89, 'tomato');
//   const white = new ColorClass(255, 255, 255, 'white');
   
//   div1.style.backgroundColor = red.rgba(0.3);
  
//   console.log(red);




// class Pet {
//   constructor(name, age) {
//     // console.log('IN PET CONSTRUCTOR!');
//     this.name = name;
//     this.age = age;
//   }
 
//   info() {
//     return `This pet's name is ${this.name} and it is ${this.age} years old.`;
//   }
// }
 
// const karabas = new Dog('Karabas', 5);
 
// console.log(karabas.info());
// console.log(karabas.age);
 


// // inheritance...
// class Pet {
//     constructor(name, age) {
//       // console.log('IN PET CONSTRUCTOR!');
//       this.name = name;
//       this.age = age;
//     }
   
//     info() {
//       return `This pet's name is ${this.name} and it is ${this.age} years old.`;
//     }
//   }
   
//   class Dog extends Pet {
//     eat() {
//       return `${this.name} eats meat`;
//     }
//   }
   
//   const karabas = new Dog('Karabas', 5);
   
//   console.log(karabas.eat());
//   console.log(karabas.info());
//   console.log(karabas.age);


// class Cat extends Pet {
//   constructor(name, age, eyes = 'black') {
//     super(name, age);
//     this.eyes = eyes;
//   }
 
//   eat() {
//     return `${this.name} eats fish`;
//   }
//    // we are adding the same named method in the child class. polymorphism...
//   info() {
//     return `This pet's name is ${this.name} and it is ${this.age} years old, and it has ${this.eyes} eyes.`;
//   }
// }
 
// // const tekir = new Cat('Tekir', 3);
// // console.log(tekir.eat());
// // console.log(tekir.info());
// // console.log(tekir.age);


// const tekir = new Cat('Tekir', 3, "blue");
// console.log(tekir.eat());
// console.log(tekir.info());
// console.log(tekir.age);


// class Cat extends Pet {
//     // error !!! you should call parents constructor...
//     constructor(name, age, eyes = 'black') {
//       this.name = name;
//       this.age = age;
//       this.eyes = eyes;
//     }
   
//     eat() {
//       return `${this.name} eats fish`;
//     }
//      // we are adding the same named method in the child class. polymorphism...
//     info() {
//       return `This pet's name is ${this.name} and it is ${this.age} years old, and it has ${this.eyes} eyes.`;
//     }
//   }
  
//   const tekir = new Cat('Tekir', 3, "blue");
//   console.log(tekir.eat());
//   console.log(tekir.info());
//   console.log(tekir.age);
  



// // adding private properties: use # for creating protected/private properties.
// // old convention for creating private properties: _ before the name... just for informing, no coersion.
// class Pet {
//     age;
//     _name;
//     constructor(name, age) {
//         this._name = name;
//         this.age = age;
//     }

//     info() {
//         return `This pet's name is ${this._name} and it is ${this.age} years old.`;
//     }
// }

// const karabas = new Pet('Karabas', 5);

// console.log(karabas.info());
// console.log(karabas.age);


// // new method... # 
// // getters and setters...
// // by using getters and setters, we are accesing and using the methods like properties. 
// class Pet {
//     #age;
//     _name;
//     constructor(name, age) {
//         this._name = name;
//         this.#age = age;
//     }

//     info() {
//         return `This pet's name is ${this._name} and it is ${this.#age} years old.`;
//     }

//     get petAge() {
//         return this.#age;
//     }

//     set petAge(newAge) {   // for example, we can make validation for the age with this method...
//         this.#age = newAge;
//     }

//     #test() { return "this is a private method..."}
// }

// const karabas = new Pet('Karabas', 5);

// console.log(karabas.info());
// console.log(karabas.age);
// console.log(karabas.petAge);

// // // error
// // karabas.petAge(11);

// karabas.petAge = 11;
// console.log(karabas.petAge);


// we can still access the private properties with regular functions.
// class Pet {
//     #age;
//     _name;
//     constructor(name, age) {
//         this._name = name;
//         this.#age = age;
//     }

//     info() {
//         return `This pet's name is ${this._name} and it is ${this.#age} years old.`;
//     }

//     get petAge() {
//         return this.#age;
//     }

//     set petAge(newAge) {   // for example, we can make validation for the age with this method...
//         this.#age = newAge;
//     }

//     #test() { return "this is a private method..."}

//     setPetAge(newAge) {
//         this.#age = newAge;
//     }

// }

// const karabas = new Pet('Karabas', 5);

// console.log(karabas.info());
// console.log(karabas.age);
// console.log(karabas.petAge);

// // // error
// // karabas.petAge(11);

// karabas.petAge = 11;
// console.log(karabas.petAge);

// karabas.setPetAge(9);
// console.log(karabas.petAge);

