/*

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

*/

// =================================================================




/* 

let js = 'amazing';
if (js === 'amazing') {
  alert('JavaScript is ' +  js);
}
----------------------------------------------------------------
*/


// 2.11 - Data Types
/*
let javaScriptIsFun = true; // the value holds the type, not the variable.
console.log(javaScriptIsFun); 

let myName = 'Joe';

console.log(typeof javaScriptIsFun);
console.log(myName);

let yourName;
console.log(typeof yourName);

yourName = 'Sabrina';
console.log(typeof yourName);
----------------------------------------------------------------
*/

/*
// 2.12 - Declare variables

 let a = 30; // declare variables that will be reassigned along the code, and to declare
//  empty variables. A mutable variable.

const birthYear = 1982; // declare variables that we cannot reassign. Therefore, it 
// cannot be declared empty. An immutable variable.

// When declaring variables only use let when you're sure that the value will change.

var teacher = 'Me'; // should be avoided. It's a deprecated way to declare variables.
----------------------------------------------------------------
*/

/*
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

--------------------------------------------------------


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

 ----------------------------------------------------------------



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

----------------------------------------------------------------


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

----------------------------------------------------------------


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

----------------------------------------------------------------


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

----------------------------------------------------------------


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

----------------------------------------------------------------

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

----------------------------------------------------------------


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

----------------------------------------------------------------

 

//2.28 - The Coditional (ternary) Operator

const age = 18;

age >= 28 ? console.log(`You're old`) : console.log (`You're young`);

const drink = age >= 18 ? 'wine 🍷' : 'water 🚰';
console.log(drink);

//The ternary operator produces a value, then it's an expression. So, it can be used
// wherever an exprection is acceptable.

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 🚰'}.`);

*/