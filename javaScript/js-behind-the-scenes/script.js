'use strict';

// function calcAge(birthYear) {
//   const age = 2023 - birthYear;
//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1982 && birthYear <= 1996) {
//       var millenial = true;
//       // Creating NEW variable with same name as outer scope's variable.
//       const firstName = 'Joelson';

//       //Reassigning outer scope's variable
//       output = `NEW OUTPUT`;
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(millenial);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Joe';
// calcAge(1982);

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
