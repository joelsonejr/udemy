/*
SUMMARY

3.32 - Strict Mode
3.33 - Functions


------------------------------------------------------------------------------

NOTES:


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

------------------------------------------------------------------------------



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

------------------------------------------------------------------------------



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

------------------------------------------------------------------------------


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

------------------------------------------------------------------------------



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

--------------------------------------------------------


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
----------------------------------------------------------------



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
---------------------------------------------------------------------------



// 3.40 - Basic Array Operations

'use strict';

//add elements
const friends = ['Janice', 'Penny', 'Amy'];
let newLength = friends.push('Loren'); //add an item to the end of the array. push returns the length of the array

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

console.log(friends.includes('Amy')); // returns 'true' if the element is in the array. Returns 'false' otherwise. It's a strict comparison. 

------------------------------------------------------------------------------------



//3.42 Introduction to Objects

const itadori = {
  firstName: 'Yuuji',
  lastName: 'Itadori',
  age: 2023 - 1997,
  job: 'Jujutsu Shi',
  friends: ['Gojou', 'Fusiguro', 'Kugisaki']
};

---------------------------------------------------------



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

-----------------------------------------------------------------
*/

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
