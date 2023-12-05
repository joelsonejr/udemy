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

const firstName = 'Joe';
calcAge(1982);

// console.log(age);
