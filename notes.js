//9.122 - Working With Strings - Part 1 & 2 & 3
'use strict';

const airLine = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airLine.length);
console.log('B737'.length);

console.log(airLine.indexOf('r'));
console.log(airLine.lastIndexOf('r'));

console.log(airLine.indexOf('Portugal'));
console.log(airLine.indexOf('portugal'));

console.log(airLine.slice(4)); //provide begining of the slice
console.log(airLine.slice(4, 7)); //provide begining and end of the slice

console.log(airLine.slice(0, airLine.indexOf(' ')));
console.log(airLine.slice(0, airLine.lastIndexOf(' ') + 1));

console.log(airLine.slice(-2));
console.log(airLine.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //Usually, B and E are middle seats
  const s = seat.slice(-1);

  if (s == 'B' || s == 'E') {
    console.log('You got the middle seat');
  } else {
    console.log('You got lucky');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());

//Fix capitalization in name
const passenger = 'JoElSoN';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

passengerCorrect;

const correctNameCase = function (passenger) {
  const passNameLower = passenger.toLowerCase();
  const firstLetter = passNameLower[0].toUpperCase();
  const correctName = firstLetter + passNameLower.slice(1);

  return correctName;
};

//Comparing e-mails
const email = 'hello@joe.com';
const loginEmail = '  Hello@Joe.com \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
trimmedEmail;

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail === email);

const compareEmail = function (email, loginEmail) {
  return email === loginEmail.toLowerCase().trim();
};

console.log(compareEmail(email, loginEmail));

//Replacing parts of a string
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
priceUS;

const announcement =
  'All passagengers come to the boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));

//using RegEx to replace all the occurences of 'door'
console.log(announcement.replace(/door/g, 'gate'));

//Booleans
const plane2 = 'Airbus A320neo';
console.log(plane2.includes('A320'));
console.log(plane2.includes('Boeing'));
console.log(plane2.startsWith('Airb'));
console.log(plane2.endsWith('neo'));

//Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  const forbiddenItens = ['knife', 'gun', 'explosive'];

  for (let i = 0; i < forbiddenItens.length; i++) {
    if (baggage.includes(forbiddenItens[i])) {
      return false;
    }
  }

  return true;
};

const pass1 = 'I have a laptop, some food and a pocket Knife';
const pass2 = 'Socks and camera';
const pass3 = 'Got some snacks and a gun for protection';

console.log(checkBaggage(pass1));
console.log(checkBaggage(pass2));
console.log(checkBaggage(pass3));

/*
=============================================================================================
                                        SUMMARY
=============================================================================================
                          
SECTION 02

    2.11 - Data Types
    2.12 - Declare variables
    2.13 - Basic Operators
    2.17 - Strings and Template Literals
    2.18 - Taking Decisions: if / else Statements
    2.20 - Type Conversion (manually) and Coercion (conversion performed by JS automatically)
    2.21 - Truthy and Falsy Values
    2.22 - Equality Operators == vs === 
    2.24 - Logical Operators   
    2.26 - Switch statement
    2.27 - Statements and Expressions
    2.28 - The Coditional (ternary) Operator

SECTION 03

    3.32 - Strict Mode
    3.33 - Functions
    3.34 - Function Declaration vs. Expressions
    3.35 - Arrow Functions
    3.36 - Functions Calling Another Functions
    3.37 - Reviewing Functions
    3.39 Introduction to Arrays
    3.40 - Basic Array Operations
    3.42 Introduction to Objects
    3.43 Dot vs Bracket Notation
    3.44 Object Methods
    3.46 - Iteration: the For loop
    3.47 - Looping Arrays, breaking and cotinuing
    3.48 - Looping backwards, and Loops in Loops
    3.49 The While Loop

SECTION 04
 - Navigate this course

SECTION 05 
  -  Developer Skills & Editor Setup

SECTION 06  
  - HTML & CSS Crash Couse. See specific folder. 

SECTION 07
  7.70 - Project #1: Guesse My Number
  7.79 - Project #2: Modal Window
  7.81 - Handling an "Esc" Keypress Event

SECTION 08
  8.93 - Scoping in Practice.
  8.95 - Hoisting and TDZ in Practice.
  8.97 - This Keywork in Practice.
  8.98 - Regular Functions vs Arrow Functions
  8.99 - Primitives vs Objects (Primitive vs Referente Types)

SECTION 09
  9.103 - Destructuring Arrays
  9.104 - Destructuring Objects
  9.105 - Spread Operator
  9.106 - REST Pattern and Parameters
  9.107 - Short Circuiting (&& and ||) 
  9.108 - The Nullish Coalescing Operator
  9.109 - The Nullish Coalescing Operator
  9.110 - Logical Assignment Operators
  9.112 -Looping Arrays: the for-of loop
  9.113 - Enhanced Object Literals
  9.114 - Optional Chaining (?.)
  9.115 - Looping Objects Keys, Values, and Entries
  9.117 - Sets
  9.118 - Maps: Fundamentals
  9.119 - Maps: Iteration
  9.120 - Summary: Which Data Structure to Use?
  9.122 - Working With Strings - Part 1



=============================================================================================
                                        SECTION 09
=============================================================================================

//9.120 - Summary: Which Data Structure to Use?
# Arrays vs Sets
## Arrays
  - Provide an ordered list of values
  - Use when data manipulation is needed.
## Sets
  - Use when unique (no duplicate) values are needed.
  - Use when high performance is of the essesnce.
# Objects vc Maps
## Objects
  - Use when the inclusion of methods is necessary
  - Use when working with JSON.
## Maps
  - Use when you simply need to map key to values
  - Use when you need keys that are not strings

////////////////////////////////////////////////////////////////////////////////////////////

//  9.119 - Maps: Iteration
'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, //open 24hs
    close: 24,
  },
};

// Another way of populate a Map, without using .set
const question = new Map([
  ['question', 'Which programming language:'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);

console.log(question);

// Convert object to map
// The structure of Object.entries (an array of arrays) is very similar to the
// approach showed above.
console.log(Object.entries(openingHours));
// It means that there's a easy way of creating a Map from an Object.
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Iteration over a Map
//Destructuring will be used to recover the pair kee/ value from the map.
//Works in a similar way as iterating over an Object. The only difference is that
// in the place of "question" (name of the Map) we would use "Object.entries"
for (const [key, value] of question) {
  // in this example, only the answers will be printed
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

//QuizApp
console.log();
console.log(question.get('question'));
for (const [key, value] of question) {
  // in this example, only the answers will be printed
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

const fakeInput = 2;
const result = question.get('correct') === fakeInput;

console.log(question.get(result));

//Convert Map to array
//Just use the spread operator to unpack the Map into and array.
console.log([...question]);
//The resulting array has the same effect of [...question.entries]

//The "keys" and "values" properties can also be used in Maps.
console.log([...question.keys()]);
console.log([...question.values()]);

/////////////////////////////////////////////////////////////////////////////////////////////

// 9.118 - Maps: Fundamentals
'use strict';

const restaurant = new Map();

restaurant.set('name', 'Classico Italiano'); //(key, value)
restaurant.set(1, 'Firenze, Italy');
console.log(restaurant.set(2, 'Lisbon, Portugal')); // The .set updates the map and returns the updated map.

restaurant
  .set('categories', ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(restaurant.get('name'));
console.log(restaurant.get(true));

const time = 21;
console.log(
  restaurant.get(
    time > restaurant.get('open') && time < restaurant.get('close')
  )
);

console.log(restaurant.has('categories'));

restaurant.delete(2);
console.log(restaurant);
console.log(restaurant.size);
restaurant.clear();
console.log(restaurant.size);

/////////////////////////////////////////////////////////////////////////////////////////////

//9.117 - Sets

//Set are not used to replace Arrays.
//The elements of a set are unique. It ignores all duplicate values.
//Values of a set cannot be retrieved. It's bacisally used to determine if a
// value is or not in a set.

'use strict';

const orders = ['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza'];

const orderSet = new Set(orders);
console.log(orderSet);
console.log(new Set('Joelson'));

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Strawberry'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
// orderSet.clear();
console.log(orderSet);
for (const order of orderSet) console.log(order);

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
let staffUnique = new Set(staff);
console.log(`This is a set: `);
console.log(staffUnique);
//Converting from Set to an Array, using the spread operator.
staffUnique = [...new Set(staff)];
console.log(`Set converted into an array:`);
console.log(staffUnique);

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

//9.115 - Looping Objects Keys, Values, and Entries

'use strict';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, //open 24hs
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1, //setting default values.
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngridients) {
    console.log(`mains ingredient ${mainIngredient}`);
    console.log(otherIngridients);
  },
};

//Looping over object property names (keys)
for (const day of Object.keys(openingHours)) {
  // console.log(day);
}

const properties = Object.keys(openingHours);
// console.log(properties);

//Counting how many properties are in the object
// console.log(properties.length);

//Listing avaliable openingDays
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
// console.log(openStr);

//Object property values
const values = Object.values(openingHours);
// console.log(values);

//Object entries (names + values)
const entries = Object.entries(openingHours);
// console.log(entries);

for (const x of entries) {
  // console.log(x);
}

//Another way of using the entries
//To get the values, we'll use destructuring.

// for (const [key, value] of entries) {
//Value is an object. So it can be destructured, in order to get the open and close hours.
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open}, and close at ${close}`);
}

//--> Keys, entries and values make the object behave as an array.

=============================================================================================

//9.114-l.1964 - Optional Chaining (?.)

'use strict';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, //open 24hs
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngridients) {
    console.log(`mains ingredient ${mainIngredient}`);
    console.log(otherIngridients);
  },
};

//The 'mon' propertie does not exist, so it returns a error message
// console.log(restaurant.openingHours.mon.open); 

//To avoid this, one can check if the property exists, before printing it's value:
// if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open); 

//There's a easyer way of doing it, using Optional Chaining
//'?' is the optional chaining operator
//only if the property before the question mark exists, the property 'open' will
//be read. Otherwise, 'undefined' will be returned.
// console.log(restaurant.openingHours.mon?.open); 

//It can also be used to perform more verifications
// console.log(restaurant.openingHours?.fri?.open); 

//Another example
const days = ['mon', 'tue', 'wed', 'thu', 'fry', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';

  console.log(`On ${day}, we open at ${open}`);
}
/*The nullish coalescing operator is to make sure that when the value of 'open'
is '0', it won't be interpreted as undefined. 

//My approuch
for (const day of weekdays) {
  restaurant.openingHours?.[day] === undefined &&
    console.log(`The restaurant doesn't open on ${day}.`);

  restaurant.openingHours?.[day] !== undefined &&
    console.log(
      `On ${day} the restaurant opens at ${restaurant.openingHours?.[day]?.open}.`
    );
}

//Optional Chaining on methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// In the above code, the following steps happen:
// 1. The optional chaining verify if the method exists.
// 2. If it does, it then calls the method, using the given parameters.
// 3. In case it doesn't, the nullish coalescing operator provides a default message,
// as we can see below 

console.log(restaurant.orderIceCream?.(0, 1) ?? 'Method does not exist');

//Optional Chaining on arrays
const users = [
  {
    name: 'Quenia',
    email: 'quenia@scientist.com',
  },
];

console.log(users[0]?.name ?? 'User not found');
console.log(users[13]?.name ?? 'User not found');

=============================================================================================

// 9.113 - Enhanced Object Literals
'use strict';

//In ES6 we can compute property names, instead of write them manually.


//OlderWay
/* const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, //open 24hs
    close: 24,
  },
  potato: {
    open: 50, //open 24hs
    close: 783,
  },
}; 

//ES6 way
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fry', 'sat', 'sun'];

const openingHours = {
  //between the brackets goes the calculation.
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  // podem ser utilizados vários tipos de computation, para preencher os valores.
  [`day-${2 + 4}`]: {
    open: 0, //open 24hs
    close: 24,
  },
  potato: {
    open: 50, //open 24hs
    close: 783,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literals. Now the name of the object can be provided only
  //once, and thats is enough for it to make parte of the restarurant object
  // in older versions of EC, it must be done in the form of
  //openingHours : openingHours

  openingHours,

  //In ES6: it's not necessary to create a property, and then set it to a function
  // expression, in order to declare a method.

  //Old method
  /*   order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1, //setting default values.
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  }, 

  //ES6 way will work the same as before, but with an easier sintax.
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({
    starterIndex = 1, //setting default values.
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngridients) {
    console.log(`mains ingredient ${mainIngredient}`);
    console.log(otherIngridients);
  },
};

=============================================================================================

// 9.112 - Looping Arrays: the for-of loop

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //open 24hs
      close: 24,
    },
    potato: {
      open: 50, //open 24hs
      close: 783,
    },
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngridients) {
    console.log(`mains ingredient ${mainIngredient}`);
    console.log(otherIngridients);
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

//Itens and indexes
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

//same goal, using destructuring
for (const [item, element] of menu.entries()) {
  console.log(`${item + 1}: ${element}`);
}

=============================================================================================

 // 9.110 - Logical Assignment Operators
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

//OR assignment operator - assigns a value to a variable if tha variable is currently falsy
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//Nullish assignment operator - only null or undefined is falsy
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
//Will assign a value to a variable if that variable is currently nullish.

// rest1.owner = rest1.owner && '<ANONYMUS';
// rest2.owner = rest2.owner && '<ANONYMUS';

//AND assignment operator - assign a value to a variable that is currently truthy
rest1.owner &&= '<ANONYMUS>';
rest2.owner &&= '<ANONYMUS>';

// console.log(rest1);
// console.log(rest2);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //open 24hs
      close: 24,
    },
    potato: {
      open: 50, //open 24hs
      close: 783,
    },
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngridients) {
    console.log(`mains ingredient ${mainIngredient}`);
    console.log(otherIngridients);
  },
};

// const { potatu, ...weekdays } = restaurant.openingHours;
// console.log(potatu);
// console.log(weekdays);
const [first, second, ...rest] = [1, 2, 3, 4, 5, 6];
console.log(first);
console.log(second);
console.log(rest); 

=============================================================================================

// 9.109 - The Nullish Coalescing Operator

// This operator works with the idea of nullish values, instead of falsy values 
Nullish values: null and undefined. It doesn't include 0 or '' (empty string). 

const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //open 24hs
      close: 24,
    },
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngridients) {
    console.log(`mains ingredient ${mainIngredient}`);
    console.log(otherIngridients);
  },
};

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

=============================================================================================

// 9.108 - Short Circuiting (&& and ||)

//Can use and return ANY data type, and can do short-circuiting (short-circuit evaluation)

//If the first value it truthy value, it will be immediately returned.

'use strict';

console.log('----- OR --------');

console.log('' || 'Joe');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

The OR operator, when the first operand is truthy, the other operand won't even be evaluated.


console.log('----- AND --------');
//Works in a opposite way than '||'
console.log(0 && 'Joe');
console.log(7 && 'Joe');
//Returns the first false value
console.log('Hello' && 23 && null && 'Joe');

The AND operator stops the evaluation when it finds a falsy value, and then returns
the last value it has read so far. In the case it goes all the way, it returns the last value. 

if (restaurant.orderPizza) {
  restaurant.orderPizza('musshrooms', 'spinach');
}
//another way of doing it is:
restaurant.orderPizza && restaurant.orderPizza('musshrooms', 'spinach');

//The OR operator will return the first truthy value of all the operands, or the
//last value, if they are all falsy.

//The AND operataor will retun the first falsy value, or the last value if, they
//are all truthy.

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //open 24hs
      close: 24,
    },
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngridients) {
    console.log(`mains ingredient ${mainIngredient}`);
    console.log(otherIngridients);
  },
};


const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

=============================================================================================

// 9.107 - Rest Pattern and Parameters
//The spread operator is used to expand and array into individual elements (unpack an array)
//The rest element use the exact same sintax, but collect multiple elements,
// and condens them into an array (pack elements into an array).

//SPREAD, because on RIGHT side of the assign (=) operator.
//1) Destructuring

'use strict';
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //open 24hs
      close: 24,
    },
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngridients) {
    console.log(`mains ingredient ${mainIngredient}`);
    console.log(otherIngridients);
  },
};

const arr = [1, 2, ...[3, 4]];
console.log(arr);

//REST, because on LEFT side of the assign (=) operator.
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a);
console.log(b);
console.log(others);
//The rest is collecting the elements, after the last variable,  that were
// unused in the destructuring assignment. So it doesn't included any skipped
// elemet. For that reason, the REST paatern must always be the last in the destructuring
// assignment. Also there should be only one REST into the destructuring assignment.

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat);
console.log(weekdays);

//2) Functions - REST Parameters
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(5, 3, 7, 2, 8, 4, 9);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('cheese');

//The REST pattern is used were we would write VARIABLE NAMES separated by comma.
//The SPREAD operator is used were we would otherwise write VALUES separated by comma.

=============================================================================================

//9.106 Spread Operator

'use strict';

const arr = [7, 8, 9];

//the spread operator takes all the values from the 'arr' array, and write them
// individually into the newArray.
const newArr = [1, 2, ...arr];
console.log(newArr);

//It works on the same way, when we pass arguments to functions.
console.log(...newArr);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //open 24hs
      close: 24,
    },
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//The spread operator doesn't create new variables (in contrast with destructuring).
//So, we can only use it in places where we would put values separated by comma.

//spread operator to create shallow copies

const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//Joining two or more arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//The spread operator works in all iterables (arrays, strings, maps or sets. NOT objects);
const string = 'Joe';
const letters = [...string, '', 'E'];
console.log(letters);
console.log(string);

//The spread operator can be only used where when creating a new array, or when
// passing values to a function.

// const ingridients = [
//   prompt(`Let's make pasta! Ingridient 1?`),
//   prompt(`Ingridient 2?`),
//   prompt(`Ingridient 3?`),
// ];

// restaurant.orderPasta(...ingridients);

//Since ES2018 the spread operator also works on Objects.
const newRestaurant = { foundingIn: 19198, ...restaurant, founder: 'Giuseppe' };
console.log(newRestaurant);

//Shallow copy of objects

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name);
console.log(restaurantCopy.name);

=============================================================================================

// 9.105 - Destructuring Objects

'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //open 24hs
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1, //setting default values.
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

const myOrder = {
  time: '22:30',
  address: 'Via des Solem, 21',
  mainIndex: 2,
  starterIndex: 2,
};

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via des Solem, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

restaurant.orderDelivery(myOrder);

restaurant.orderDelivery({
  address: 'Vila do Chaves',
  starterIndex: 1,
});

//Destructuring
const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

//Destructuring and renaming variables
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
// console.log(restaurantName, hours, tags);

// Destructuring and setting a default value
const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

//Mutanting Variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
// console.log(a, b);

//Deconstructing nested objects
// const { fri } = openingHours;
// console.log(fri);
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// Deconstructing nested objects, and assigning new variables.
const {
  fri: { open: o, close: c },
} = openingHours;
// console.log(o, c);

=============================================================================================

// 9.103 - Destructuring Arrays
//Unpack values from Arrays or Objects into separate variables. It means
//breaking a complex structure into a more simpler one.

'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 5];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//On the left side we have the destructuring assignment.
const [x, y, z] = arr;
console.log(x, y, z);

//grab first two elements
const [first, second] = restaurant.categories;
//skiping second element
let [categ1, , categ3] = restaurant.categories;
console.log(first, second);
console.log(categ1, categ3);
//switching values
[categ1, categ3] = [categ3, categ1];
console.log(categ1, categ3);

//receive 2 return values from a function
const [starterCourse, mainCourse] = restaurant.order(2, 0);
console.log(starterCourse, mainCourse);

//access a nested Array
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
//destructuring inside destructuring
const [aa, bb, [cc, dd]] = nested;
console.log(aa, bb, cc, dd);

//Default values. In case the lenght of the array is unknow.
//Without default values.
const [p, q, r] = [8, 9];
console.log(p, q, r);
//With default values.
const [s = 1, e = 1, f = 1] = [8, 9];
console.log(s, e, f);


=============================================================================================
                                        SECTION 08
=============================================================================================

//8.99 - Primitives vs Objects (Primitive vs Referente Types)

/*
Primitives (Primitive Types)
 Number
 String
 Boolean
 Undefined
 Null
 Symbol
 BigInt

 Objects (Reference Types)
 Object Literal
 Arrays
 Functions
 ...

 When a 'const' is a reference value, the reference value can be changed, 
 because the const value (in memory) won't be affected.

 const me = {
  name: 'joe',
  age: 41
 }


  ======= CALL STACK ========             ============= HEAP ===============
identifier    Address   Value             Address             Value
  me            003       D30F      ->      D30F      { name: 'joe', age: 41}

  The variable is created in the call stack, and it is linked to a address in 
  the memory. That address references to a address in the HEAP. So, when if I 
  change the age to '39', I won't be changing the value of the const, wich is 
  'D30F'

So, if i do:
const otherPerson = joe

I'm creating a new variable, wich is pointing to the same memory location. 
Therefore, pointing to the same address in the Heap. That's why if change a 
property in the variable 'otherPerso' I'll be also changing it in the variable
'joe'

otherPerson.age = 32 
By doing that, 'joe.age' will also change to 32.
  
'use strict';

let age = 40;
let oldAge = age;
age = 41;
console.log(age);
console.log(oldAge);

const me = {
  name: 'joe',
  age: 41,
};
const friend = me;
friend.age = 27;
console.log('Friend: ', friend);
console.log('Me: ', me);



//Primitives vs Objects in Practice
'use strict';

//Primitive Types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

//Reference Types
console.log(oldLastName);
console.log(lastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log(`Before Marriage:`, jessica);
console.log(`Afterr marriage:`, marriedJessica);

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

//This function merges two objects, and then return a new one. But it only
// works on the first level. If there is an object inside of an object, the
// the inner object will still point to the 'original' reference. That can be
// seen in the change that were applied to the 'family' array.
const jessicaCopy = Object.assign({}, jessica2);

jessicaCopy.lastName = 'Parker';

console.log(`Jessica2: `, jessica2);
console.log(`Jessica Copy`, jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log(`Jessica2: `, jessica2);
console.log(`Jessica Copy`, jessicaCopy);

=============================================================================================

// 8.98 - Regular Functions and Arrow Functions
var firstName = 'Sheila';

const joe = {
  firstName: 'Joe',
  year: 1982,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);

    //Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    //The arrow function uses the 'this' keyword from its parent scope. In
    // this case in the parent scope the this keyword is 'joe'.
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

joe.greet();
joe.calcAge();

//Arguments Keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(3, 2);
addExpr(1, 1, 2, 3, 5);

=============================================================================================

// 8.97 - This Keywork in Practice.

'use strict'

const firstName = 'Joe';
calcAge(1982);

console.log(this);

//Regular functions receive their own values for "this"
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1982);

//arrow function don't receive a "this" keyword. What happens it that
// it receives the "this value" from the parent scope.
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1982);

//this referencing to the object who called the method.
const joe = {
  year: 1982,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
};

//Here, the objetc joe is calling the method calcAge. That's why
//"this" is pointing to "joe".
joe.calcAge();

const raquel = {
  year: 1987,
};

raquel.calcAge = joe.calcAge;

raquel.calcAge();

const testFunction = raquel.calcAge;
testFunction();

=============================================================================================

// 8.93 Scoping

'use strict';

function calcAge(birthYear) {
  const age = 2023 - birthYear;
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1982 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable.
      const firstName = 'Joelson';

      //Reassigning outer scope's variable
      output = `NEW OUTPUT`;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
  }
  printAge();
  return age;
}

=============================================================================================
                                        SECTION 07
=============================================================================================

7.81 - Handling an "Esc" Keypress Event

document.addEventListener('keydown', function(event){}

document: the document model
addEventListener: the same listener as before

keydow: There are 3 types os key events: keydown (when a key is pressed), 
keyup (when a key is released) and keypress (the key was pressed, and is 
still being pressed).

event: when the eventListener is triggered, it creates an object, containing
information about the event. By accessing that object it's possible to 
know, for example, wich key was pressed. 
Here "event" was used for the name of the parameter, but it could have been
any name.

=============================================================================================

7.79 - Project #2: Modal Window

const btnsOpenModal = document.querySelectorAll('.show-modal');

btnsOpenModal: it's receiveing an object from the document model.
querrySelectorAll: is selecting all the objects that have the specified class/ id\

btnsOpenModal[i].addEventListener('click', openModal)
- Another exemple of a listener. Here the action is to execute the function 'openModal'.
Notice that it wasn't necessary to cast the function using the '()'. 

modal.classList.remove('hidden');
modal.classList.add('hidden');
- Removing/ adding a class to a specified object. In the 'classList'the are other 
methods used to manipulate the class of a object.

=============================================================================================

7.70 - Project #1: Guess My Number!

document.querySelector('.check').addEventListener('click', function () {});

document: the web page
querySelector: selects classe and ids within the document
addEventListener: waits for an specified event to occurr, and the executes the 
predefined action. Above it executes a function.

=============================================================================================
                                        SECTION 06
=============================================================================================
-- HTML & CSS crash course

=============================================================================================
                                        SECTION 05
=============================================================================================

// 5.61 Debbuging (fixing errors)

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    //Fix the bug
    // value: Number(prompt('Degrees in celsius:')),
    value: 10,
  };

  // B) Find the Bug
  console.log(measurement);
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

//A) Identify the bug
console.log(measureKelvin());

const calcTempAmplitudeBug = function (temps01, temps02) {
  const temps = temps01.concat(temps02);
  console.log(`temps ${temps}`);

  let maxTemp = temps[0];
  let minTemp = 0;

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    // debugger; //abre o debugger do navegador, na linha em que foi inserido.

    if (typeof currentTemp !== 'number') continue;

    if (currentTemp > maxTemp) {
      maxTemp = currentTemp;
    }
    if (currentTemp < minTemp) {
      minTemp = currentTemp;
    }
  }
  console.log(maxTemp, minTemp);
  return maxTemp - minTemp;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

//IDENFITY
console.log(amplitudeBug);

=============================================================================================

// 5.59 - Using Google. StackOverflow and MDN

'use strict';

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];


 1) Understanding the problem:
  - What is temperatur amplitude? Is the difference between highest and lowest temp.
  - How to compute max and min temperatures?
  - What's a sensor error? And what to do?

2) Breaking up into sub-problems
  - How to ignore errors?
  - Find max value in temp array
  - Find min value in temp array
  - Subtract min from max (amplitude) and return it


const calcTempAmplitude = function (temps) {
  let maxTemp = temps[0];
  let minTemp = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    if (typeof currentTemp !== 'number') continue;

    if (currentTemp > maxTemp) {
      maxTemp = currentTemp;
    }
    if (currentTemp < minTemp) {
      minTemp = currentTemp;
    }
  }
  console.log(maxTemp, minTemp);
  return maxTemp - minTemp;
};

const tempAmplitude = calcTempAmplitude(temperatures);
console.log(`The temperature amplitude is ${tempAmplitude} degrees`);


PROBLEM 2:
- Function should receive 2 arrays of temps.

1) Understanding the problem
  - With 2 arrays, shoud we implement the functionality twice? NO! Just merge two arrays

2) Breaking up into sub-problems
  - How to merge 2 arrays?


const calcTempAmplitudeNew = function (temps01, temps02) {
  const temps = temps01.concat(temps02);
  console.log(`temps ${temps}`);

  let maxTemp = temps[0];
  let minTemp = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    if (typeof currentTemp !== 'number') continue;

    if (currentTemp > maxTemp) {
      maxTemp = currentTemp;
    }
    if (currentTemp < minTemp) {
      minTemp = currentTemp;
    }
  }
  console.log(maxTemp, minTemp);
  return maxTemp - minTemp;
};

const tempAmplitudeNew = calcTempAmplitudeNew([2, 3, 5], [7, 50, 17]);
console.log(`The second temperature amplitude is ${tempAmplitudeNew} degrees`);

=============================================================================================
                                        SECTION 04
=============================================================================================
-- How to navigate this course

=============================================================================================
                                        SECTION 03
=============================================================================================
// 3.49 The While Loop

for (let rep = 1; rep <= 10; rep++){
  console.log(`Lifting weigths repetition ${rep}`);
}

let rep = 1;
while (rep <= 10){
  console.log(`Lifting weigths repetition ${rep}`);

  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
let diceRolls = 0;
while (dice != 6) {
  console.log(dice);
  dice = Math.trunc(Math.random() * 6) + 1;
  diceRolls++
}
console.log(`You rolled the dice ${diceRolls} times.`)

=============================================================================================

// 3.48 - Looping backwards, and Loops in Loops

'use strict';

const kugisaki = [
  'Nobara',
  'Kugisaki',
  2023 - 2002,
  'Jujutsu Shi', 
  ['Itadori', 'Fushiguro','Maki', 'Panda', 'Inumaki', ]
];


for (let i = kugisaki.length - 1; i >= 0; i-- ){
  console.log(kugisaki[i]);
}

let exercise = ['Lifting weights', 'LegPress', 'Bench Press'];

for (let series = 1; series <= 3; series++){
  console.log(`---Starting exercise ${series}`);
  for(let repetition = 1; repetition <=5; repetition++){
    console.log(`${exercise[series - 1]} repetition ${repetition}`);
  }
}

=============================================================================================

// 3.47 - Looping Arrays, breaking and cotinuing

'use stirct'

const kugisaki = [
  'Nobara',
  'Kugisaki',
  2023 - 2002,
  'Jujutsu Shi', 
  ['Itadori', 'Fushiguro','Maki', 'Panda', 'Inumaki', ]
];

const types= [];

for (let itens = 0; itens < kugisaki.length; itens++){
  
  console.log(kugisaki[itens], typeof kugisaki[itens]);

  //Filling an array
  // types[itens] = typeof kugisaki[itens];
  types.push(typeof kugisaki[itens])
}

console.log(types);

//This is my take
for (let i = 0; i < kugisaki.length; i++) {
  if (typeof kugisaki[i] !== 'object'){
    console.log(kugisaki[i]);
  }
  else {
    for (let sub = 0; sub < kugisaki[i].length; sub++){
      console.log(kugisaki[i][sub]);
    }
  }
};


const years = [1991, 2007, 1969, 2023];
const ages = [];

for (let i = 0; i < years.length; i++){
  ages.push(2050 - years[i]);
}

console.log(ages);

// cotinue and break
console.log (`---- ONLY STINGS ----`);
for (let i = 0; i < kugisaki.length; i++) {
  if (typeof kugisaki[i] !== 'string') continue;
      console.log(kugisaki[i]);
}

console.log( `--- BREAK WITH NUMBER ---`);
for (let i = 0; i < kugisaki.length; i++) {
  if (typeof kugisaki[i] === 'number') break;
    console.log(kugisaki[i]);
}

=============================================================================================

// 3.46 - Iteration: the For loop
'use strict'

for (let repetition = 1; repetition <= 10; repetition++) {
  console.log(`Lifting weights repetition ${repetition} 🏋`);
}

=============================================================================================

// 3.44 Object Methods
'use strict';

const itadori = {
  firstName: 'Yuuji',
  lastName: 'Itadori',
  pronoun: 'he',
  birthYear: 1997,
  job: 'Jujutsu Shi',
  friends: ['Gojou', 'Fusiguro', 'Kugisaki'],
  hasDriversLicence: false,

  calcAge: function() {
    this.age =  2037 - this.birthYear;
    return this.age;

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // }

  // calcAge: function() {
  //   return 2037 - this.birthYear; //this is pointing to the object wich is calling the function.
  // }


  },

  getSummary: function() {
    // if (this.hasDriversLicence == true) {
    //     license = "has a driver's license";
    // } else {
    //   license = "has no driver's license";
    // }

    license = this.hasDriversLicence ? 'a' : 'no'; 

    this.info = `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and ${this.pronoun} has ${license} drivers license.`;

    return this.info;
  }

};

console.log(itadori.calcAge(1997));
console.log(itadori['calcAge'](1997));
console.log(itadori.getSummary());
console.log(itadori);

=============================================================================================

//3.43 Dot vs Bracket Notation
const itadori = {
  firstName: 'Yuuji',
  lastName: 'Itadori',
  age: 2023 - 1997,
  job: 'Jujutsu Shi',
  friends: ['Toudou', 'Gojou', 'Fusiguro', 'Kugisaki']
};

console.log(itadori.lastName);
console.log(itadori['firstName']); //using brackets we can use an expression to retrieve values from the objetc 

const nameKey = 'Name';

console.log(itadori['first' + nameKey]);
console.log(itadori['last' + nameKey]);

console.log(`${itadori['last' + nameKey]} ${itadori['first' + nameKey]}`);

//Adding new properties to an object

itadori.location = 'Japan';
itadori['jutsushikiTenkai'] = 'unknow technique';
itadori.amountOfFriends = itadori.friends.length;

console.log(
  `${itadori['first' + nameKey]} has ${itadori.amountOfFriends} friends, and his best friend is called ${itadori.friends[0]}. `
) 

=============================================================================================

//3.42 Introduction to Objects

const itadori = {
  firstName: 'Yuuji',
  lastName: 'Itadori',
  age: 2023 - 1997,
  job: 'Jujutsu Shi',
  friends: ['Gojou', 'Fusiguro', 'Kugisaki']
};

=============================================================================================

// 3.40 - Basic Array Operations

'use strict';

//add elements
const friends = ['Janice', 'Penny', 'Amy'];
let newLength = friends.push('Loren'); //add an item to the end of the array. push 
returns the length of the array

console.log(friends);
console.log(newLength);

newLength = friends.unshift('Cassie'); //adds an item in the beginning of the array. 
console.log(friends);
console.log(newLength);

//remove elements
const popped = friends.pop(); // removes the last element. It returns the removed element.
console.log(friends);
console.log(popped);

friends.shift(); // removes the first element.
console.log(friends);

//position
friends.indexOf('Penny') // returns the position of the element

console.log(friends.indexOf('Penny')); //it returns '-1' when the searched element doesn't exist.

console.log(friends.includes('Amy')); // returns 'true' if the element is in the array. 
Returns 'false' otherwise. It's a strict comparison. 

=============================================================================================

//3.39 Introduction to Arrays

const friends = ['Janice', 'Penny', 'Amy'];


const years = new Array(1992, 1982, 2000, 2009);
console.log(years);

console.log(friends);
console.log(friends[1]);
console.log(friends.length);
console.log(friends[friends.length -1]);

friends[2] = 'Nicky';
console.log(friends);

const joe = ['Joelson', 'Junior', 2023 - 1982, 'analyst', friends];
console.log(joe)

//exercise
const calcAge =  birthYear => 2037 - birthYear;

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])];
console.log(`Ages: ${ages}`);

=============================================================================================

// 3.37 - Reviewing Functions
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const calcRetirement = function (age) {
  timeToRetire = 65 - age;
  if (timeToRetire > 0) {
    return timeToRetire;
  } else {
    return -1
  }
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = calcRetirement(age);

  if (retirement > 0){
    return `${firstName} retires in ${retirement} years`;
  } else{
    return `${firstName} has already retired!!!!`;
  }
}

console.log(yearsUntilRetirement(1950, 'Joe'));

=============================================================================================

// 3.36 - Functions Calling Another Functions

const cutPieces = fruit => fruit * 4;

const fruitProcessor = (apples, oranges) => {

  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and 
  ${orangePieces} pieces of orange.`;

  return juice;
}

console.log(fruitProcessor(2,3));

=============================================================================================

// 3.35 - Arrow Functions

//one liner arrow function does the return implicitilly. 
const calcAge3 = birthYear => 2037 - 1982;

//It was used a variable to store the function. 
// the structure is: Parameter(s) => code. 

const age3 = calcAge3(1982);
console.log(age3);

const yearUntilRetirement = birthYear => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;

  return retirement;
}

const yearUntilRetirementOfAPerson = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;

  return `${firstName} retires in ${retirement} years`;
}
console.log(yearUntilRetirementOfAPerson(1982, 'Joelson'));

=============================================================================================

// 3.34 - Function Declaration vs. Expressions

//function declaration
'use strict';

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1982);


//function expression or anonymous function 
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

const age2 = calcAge2(1981);

console.log(age1, age2);

=============================================================================================

//3.33 - Functions

function logger() {
  console.log(`This is a function`);
}

//calling/ running / invoking a function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
console.log (`${apples} and ${oranges}`);

  const juice = `I'm making a juice with ${apples} apples and ${oranges} oranges`;

  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

=============================================================================================

//3.32 Strict Mode

'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriversLicense = true;
}

if(hasDriversLicense) {
  console.log(`I can drie`);
}

const interface = 'Audio';

=============================================================================================
                                        SECTION 02
=============================================================================================

//2.28 - The Coditional (ternary) Operator

const age = 18;

age >= 28 ? console.log(`You're old`) : console.log (`You're young`);

const drink = age >= 18 ? 'wine 🍷' : 'water 🚰';
console.log(drink);

//The ternary operator produces a value, then it's an expression. So, it can be used
// wherever an exprection is acceptable.

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 🚰'}.`);

=============================================================================================

// 2.27 - Statements and Expressions

// Expression is a piece of code tha produces value. 
3 + 4;
1991;
true && false && !false;

// Statement is a big piece of code, that is executed, and doesn't produce a value on it self.
if (23 > 10) {
  const str = '23 is bigger';
}
//the if block above is an example of statement

=============================================================================================

// 2.26 Switch statement
const day = 'banana';

switch(day) {
  case 'monday': // compares day to this value in a strict way.
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
    break;
  case 'tuesday': 
    console.log(`Prepare videos`);
    break;
  case 'wednesday':
  case 'thursday':
    console.log(`Code examples`);
    break
  case 'friday':
    console.log(`Record videos`);
    break;
  case 'saturday':
  case 'sunday':
    console.log( `Rest`);
  default:
    console.log(`Unknown day provided`);
}

if (day === 'monday'){
  console.log(`Plan course structure`);
  console.log(`Go to coding meetup`);
} else if (day === 'tuesday'){
  console.log(`Prepare videos`);
} else if ( day === 'wednesday' || day === 'thursday'){
  console.log(`Code examples`);
} else if (day === 'friday') {
  console.log(`Record videos`);
} else if (day === 'saturday' || day === 'sunday'){
  console.log( `Rest`);
} else {
  console.log(`Not a valid week day`);
}

=============================================================================================

//2.24 Logical Operators

const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;
// if (shouldDrive) {
//   console.log(`Sarah is able to drive`);
// } else {
//   console.log(`Someone else should drive`);
// }

const isTired = true;
console.log(shouldDrive && !isTired);

=============================================================================================

//2.22 Equality Operators == vs === 

const age = '18';

//strict equality operator 
if (age === 18) console.log(`you just became an adult (strict)`); //compare if they are exactly the same value and type.

//loos equality operator 
if (age == 18) console.log(`you just became an adult (loose)`); //compare if they are  the same value. It does type coersion. 

const favorite = 21;

if (favorite != 23) {
  console.log(`It's not 23`);
}

=============================================================================================

//2.21 Truthy and Falsy Values

//There are 5 falsy values: 0, '', undefined, null NaN. 
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean('Jon'));
console.log(Boolean({}));
console.log(Boolean(null));

const money = 50;

if (money) {
  console.log(`Save some`);
} else {
  console.log(`You need to get a job`);
}

let height;

if(height) {
  console.log(`Height is defined as ${height}`);
} else {
  console.log(`Height is not defined`);
}

=============================================================================================

//2.20 Type Conversion (manually) and Coercion (conversion performed by JS automatically)

//Conversion
const inputYear = '1991';
console.log(inputYear + 18);
console.log(Number(inputYear)+18);

console.log(String(23));

//Coercion
let testVar = ('I am ' + 40 + ' years old'); //coercion to string
console.log(testVar);
console.log(typeof testVar);

console.log('40' - '10' - 3); //coertion to number 

console.log('25' * '10'); //coertion to number
console.log('25' / '10'); //coertion to number

=============================================================================================

// 2.18 - Taking Decisions: if / else Statements

const age = 15;

if (age >= 18) {
  console.log(`Sarah can start driving lessons 🚗.`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years 😢.`)
}

const birthYear = 2012;
let century; 
if(birthYear <= 2000){
   century = 20;
} else {
   century = 21;
}
console.log(`Sarah was born in the ${century}th century.`);

=============================================================================================

// 2.17 -  Strings and Template Literals
date = new Date();
year = date.getFullYear();

 const firstName = 'Joelson';
 const job = 'System Analyst';
 const birthYear =  1982;
 const age = year - birthYear;

 const joe = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job;

 console.log(joe);

 const jon = `I'm ${firstName}, a ${age} years old ${job}`; // template literals
 console.log(jon);

 const multiline = ` This is a 
 Multiline comment. 
 It was made using, 
 template literals`;

 console.log(multiline);

 =============================================================================================

// 2.13 - Basic Operators
// math operators
const now = 2023;
const ageJon = now - 1982;
const ageSarah = now - 2007;

console.log(ageJon, ageSarah);

console.log(ageJon * 2, ageJon /10, 2 ** 3)

const firstName = 'Joelson'; 
const lastName = 'Junior'; 

console.log(firstName, lastName);

// assign operators
let x = 10 + 5; 
console.log(x);

x += 10;
console.log(x);

x *= 10;
console.log(x);

// comparison operators
console.log(ageJon > ageSarah);
console.log(ageSarah >= 18);

=============================================================================================

// 2.12 - Declare variables

 let a = 30; // declare variables that will be reassigned along the code, and to declare
//  empty variables. A mutable variable.

const birthYear = 1982; // declare variables that we cannot reassign. Therefore, it 
// cannot be declared empty. An immutable variable.

// When declaring variables only use let when you're sure that the value will change.

var teacher = 'Me'; // should be avoided. It's a deprecated way to declare variables.

=============================================================================================

// 2.11 - Data Types

let javaScriptIsFun = true; // the value holds the type, not the variable.
console.log(javaScriptIsFun); 

let myName = 'Joe';

console.log(typeof javaScriptIsFun);
console.log(myName);

let yourName;
console.log(typeof yourName);

yourName = 'Sabrina';
console.log(typeof yourName);

*/
