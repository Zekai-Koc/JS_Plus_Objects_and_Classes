// 'use strict';

// group together different values
const person = {
    firstName: 'Barry',
    lastName: 'Mitchell',
    birthYear: 1977,
    skills: ['JS', 'AWS', 'Dockers', 'Python'],
    employed: true,
    // later
    2021: 'Clarusway',
    true: 'is it working?',
    calcAgeBad: function (bYear) {
      return 2021 - bYear;
    },
    calcAge: function () {
      // return 2021 - this.birthYear;
      this.age = 2021 - this.birthYear;
      return this.age;
    },
  };
  
  // key value
  // collections of properties
  // ordered alphabetically
  console.log(person);
  
  // accessing values
  console.log(person.firstName);
  console.log(person['firstName']);
  
  // accessing invalid key
  console.log(person.midName);
  console.log(person['midName']);
  
  // console.log(person.2021);
  console.log(person['2021']);
  
  const year = 2021;
  console.log(person[year]);
  console.log(person.year);
  
  const keyTag = 'Name';
  console.log(person['first' + keyTag]);
  
  // const askedKey = prompt('Which key?');
  // console.log(person[askedKey] || 'invalid key');
  
  // modifing objects
  // updating
  console.log(person.birthYear);
  person.birthYear = 1978;
  console.log(person.birthYear);
  
  // adding property
  console.log(person.midName);
  person.midName = 'Alexis';
  console.log(person.midName);
  
  // be carefull for typos!
  person.lastnme = 'Brown';
  console.log(person);
  
  // deleting
  console.log(person.midName);
  delete person.midName;
  console.log(person.midName);
  
  // nested array and objects
  // optional
  const comments = [
    { username: 'Barry', comment: 'Bla Bla Bla', votes: 92 },
    { username: 'Tom', comment: 'new comment', votes: 102 },
  ];
  
  // looping on objects
  for (let item of Object.keys(person)) {
    console.log(item);
  }
  
  for (let item of Object.values(person)) {
    console.log(item);
  }
  
  // methods
  // copy object here to display
  console.log(person.calcAgeBad(1977));
  console.log(person.age);
  console.log(person.calcAge());
  console.log(person.age);
  
  // this
  console.log(this);
  
  const calcAge = function (birthYear) {
    console.log('Regular Function in Global Scope');
    console.log(this);
    console.log(2021 - birthYear);
  };
  
  calcAge(1977);
  
  const calcAgeArrow = (birthYear) => {
    console.log('Arrow Function in Global Scope');
    console.log(this);
    console.log(2021 - birthYear);
  };
  
  calcAgeArrow(1977);
  
  const teacher = {
    birthYear: 1977,
    calcAge: function () {
      console.log('Regular Function in Object');
      console.log(this);
      console.log(2021 - this.birthYear);
    },
    calcAgeArrow: () => {
      console.log('Arrow Function in Object');
      console.log(this);
      console.log(2021 - this.birthYear);
    },
    calcAgeDelayed: function () {
      setTimeout(function () {
        console.log('Regular Function in setTimeout');
        this.calcAge();
      }, 3000);
    },
    calcAgeDelayedArrow: function () {
      setTimeout(() => {
        console.log('Arrow Function in setTimeout');
        console.log(this);
        this.calcAge();
      }, 3000);
    },
  };
  
  teacher.calcAge();
  teacher.calcAgeArrow();
  
  const student = {
    birthYear: 1990,
  };
  
  student.calcAge = teacher.calcAge;
  
  student.calcAge();
  
  const test = teacher.calcAge;
  
  test();
  
  // function test1() {
  //   console.log('new function');
  // }
  
  // teacher.calcAge = test1;
  
  // student.calcAge();
  // teacher.calcAgeArrow();
  teacher.calcAgeDelayed();
  teacher.calcAgeDelayedArrow();
  
  // destructuring objects
  const hotel = {
    name: 'Hotel Clarusway',
    categories: ['Spa', 'Swimming Pool', 'Resort'],
    options: ['just stay', 'free breakfast', 'all inclusive'],
    rooms: ['2-bed', '3-bed', '4-bed'],
    receptionHours: {
      mon: {
        open: 8,
        close: 22,
      },
      fri: {
        open: 9,
        close: 21,
      },
      sat: {
        open: 10,
        close: 20,
      },
    },
  
    // book: function (obj) {
    // console.log(obj)
    book: function ({ arrival, departure, optionIndex = 0, roomIndex = 0 }) {
      console.log(
        `${this.rooms[roomIndex]} is booked with ${this.options[optionIndex]} between ${arrival}-${departure}`
      );
    },
  };
  
  const { name, options, rooms } = hotel;
  
  console.log(name, options, rooms);
  
  // const { name: hotelName, options: hotelOptions, rooms: hotelRooms } = hotel;
  // changing variable names
  const {
    name: hotelName,
    options: hotelOptions,
    rooms: hotelRooms = ['no data'],
  } = hotel;
  console.log(hotelName, hotelOptions, hotelRooms);
  
  // mutating obj
  // optional
  let x = 10;
  let y = 5;
  const obj = { x: 1, y: 2, z: 3 };
  ({ x, y } = obj);
  console.log(x, y);
  
  // nested objects
  const { mon } = hotel.receptionHours;
  console.log(mon);
  
  const {
    fri: { open, close },
  } = hotel.receptionHours;
  console.log(open, close);
  
  // function objects param
  // optional
  hotel.book({
    roomIndex: 0,
    optionIndex: 1,
    departure: '22:00',
    arrival: '10:00',
  });
  
  // spead opr with objects
  
  let newHotel = { ...hotel };
  newHotel = hotel;
  newHotel.name = 'new name';
  console.log(newHotel.name);
  console.log(hotel.name);
  
  // rest opeations with obj
  const { sat, ...weekdays } = hotel.receptionHours;
  console.log(sat, weekdays);
  
  // short circuting
  const guests1 = hotel.numGuests ? hotel.numGuests : 40;
  console.log(guests1);
  
  // console.log(hotel);
  
  const guests2 = hotel.numGuests || 50;
  console.log(guests2);
  
  if (hotel.book) {
    hotel.book({
      roomIndex: 0,
      optionIndex: 1,
      departure: '22:00',
      arrival: '10:00',
    });
  }
  
  hotel.book &&
    hotel.book({
      roomIndex: 0,
      optionIndex: 1,
      departure: '22:00',
      arrival: '10:00',
    });
  
  // nullish coalescing operator ES2020
  // null and undefined
  hotel.numGuests = 0;
  const guests3 = hotel.numGuests || 50;
  console.log(guests3);
  
  const guests4 = hotel.numGuests ?? 50;
  console.log(guests4);
  
  // enhanced object literals
  // functions definition
  // property from outside
  // calculating keys
  
  // chaining
  console.log(hotel.receptionHours.mon.open);
  if (hotel.receptionHours.tue) {
    console.log(hotel.receptionHours.tue.open);
  } else {
    console.log('no such property');
  }
  
  if (hotel.receptionHours && hotel.receptionHours.tue) {
    console.log(hotel.receptionHours.tue.open);
  }
  
  console.log(hotel.receptionHours.tue?.open);
  console.log(hotel.receptionHours?.tue?.open);
  
  // looping
  for (const key of Object.keys(hotel)) console.log(key);
  
  for (const key of Object.values(hotel)) console.log(key);
  
  for (const key of Object.entries(hotel)) console.log(key);
  
  // prototype
  const arr = [1, 3, 5, 7];
  //String.prototype is a "template object" for every single string.
  //We could go crazy and add our own method called yell...
  String.prototype.yell = function () {
    return `OMG!!! ${this.toUpperCase()}!!!!! AGHGHGHG!`;
  };
  
  'bees'.yell(); //"OMG!!! BEES!!!!! AGHGHGHG!"
  
  //We can overwrite an existing Array method like pop (not a good idea):
  Array.prototype.pop = function () {
    return 'SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!';
  };
  const nums = [6, 7, 8, 9];
  console.log(nums.pop()); // "SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!"
  
  //This functions makes and returns an object every time it is called.
  // The resulting objects all follow the same "recipe"
  
  const div1 = document.getElementById('mydiv1');
  const div2 = document.getElementById('mydiv2');
  
  function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function () {
      const { r, g, b } = this;
      return `rgb(${r}, ${g}, ${b})`;
    };
    color.hex = function () {
      const { r, g, b } = this;
      return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };
    return color;
  }
  
  const firstColor = makeColor(35, 255, 150);
  firstColor.hex(); //firstColor.hex();
  firstColor.rgb(); //"rgb(35, 255, 150)"
  
  div2.style.backgroundColor = firstColor.hex();
  
  const black = makeColor(0, 0, 0);
  black.rgb(); //"rgb(0, 0, 0)"
  black.hex(); //"#0000s00"
  
  // This is a Constructor Function...
  function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.test = function () {
      console.log('test');
    };
  }
  
  //If you call it on its own like a regular function...
  Color(35, 60, 190); //undefined
  //It returns undefined. Seems useless!
  
  // *****************
  // THE NEW OPERATOR!
  // *****************
  
  // 1. Creates a blank, plain JavaScript object;
  // 2. Links (sets the constructor of) this object to another object;
  // 3. Passes the newly created object from Step 1 as the this context;
  // 4. Returns this if the function doesn't return its own object.
  
  Color.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  };
  
  Color.prototype.hex = function () {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };
  
  Color.prototype.rgba = function (a = 1.0) {
    const { r, g, b } = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  };
  
  const color1 = new Color(40, 255, 60);
  color1.hex();
  const color2 = new Color(0, 0, 0);
  color2.hex();
  
  // compare hex ===
  
  // using class
  
  class ColorClass {
    constructor(r, g, b, name) {
      this.r = r;
      this.g = g;
      this.b = b;
      this.name = name;
    }
    innerRGB() {
      const { r, g, b } = this;
      return `${r}, ${g}, ${b}`;
    }
    rgb = function () {
      return `rgb(${this.innerRGB()})`;
    };
    rgba(a = 1.0) {
      return `rgba(${this.innerRGB()}, ${a})`;
    }
    hex() {
      const { r, g, b } = this;
      return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
  }
  const red = new ColorClass(255, 67, 89, 'tomato');
  const white = new ColorClass(255, 255, 255, 'white');
  
  div1.style.backgroundColor = red.rgba(0.9);
  // div2.style.backgroundColor = white.rgb();
  
  
  /*
  class ColorClass {
    constructor(r, g, b, name) {
      this.r = r;
      this.g = g;
      this.b = b;
      this.name = name;
    }
  
    rgb() {
      const { r, g, b } = this;
      return `rgb(${r}, ${g}, ${b})`;
    }
    rgba(a = 1.0) {
      const { r, g, b } = this;
      return `rgba(${r}, ${g}, ${b}, ${a})`;
    }
    hex() {
      const { r, g, b } = this;
      return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
  }
  const red = new ColorClass(255, 67, 89, 'tomato');
  const white = new ColorClass(255, 255, 255, 'white');
  
  div1.style.backgroundColor = red.rgba(0.8);
  
  
  // static
  
  const arr = [1,2,3,4]
  arr.from?
  */
  /*
  class Pet {
    constructor(name, age) {
      // console.log('IN PET CONSTRUCTOR!');
      this.name = name;
      this.age = age;
    }
  
    info() {
      return `This pet's name is ${this.name} and it is ${this.age} years old.`;
    }
  }
  
  class Dog extends Pet {
    eat() {
      return `${this.name} eats meat`;
    }
  }
  
  const karabas = new Dog('Karabas', 5);
  
  console.log(karabas.eat());
  console.log(karabas.info());
  console.log(karabas.age);
  
  class Cat extends Pet {
    constructor(name, age, eyes = 'black') {
      // console.log('IN CAT CONSTRUCTOR!');
      super(name, age);
      this.eyes = eyes;
    }
  
    eat() {
      return `${this.name} eats fish`;
    }
  
    info() {
      return `This pet's name is ${this.name} and it is ${this.age} years old, and it has ${this.eyes} eyes.`;
    }
  }
  
  const tekir = new Cat('Tekir', 3);
  console.log(tekir.eat());
  console.log(tekir.info());
  console.log(tekir.age);
  */
  class Pet {
    #age;
    _name;
    constructor(name, age) {
      // console.log('IN PET CONSTRUCTOR!');
      this._name = name;
      this.#age = age;
    }
  
    info() {
      return `This pet's name is ${this._name} and it is ${this.#age} years old.`;
    }
  
    get petAge() {
      return this.#age;
    }
  
    set petAge(newAge) {
      this.#age = newAge;
    }
  }
  
  const karabas = new Pet('Karabas', 5);
  
  console.log(karabas.info());
  console.log(karabas.age);
  console.log(karabas.petAge);