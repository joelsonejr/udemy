let massMark = 78;
const heightMark = 1.69;

let massJohn = 92;
const heightJohn = 1.95;

function calculateBMI(mass, height) {
  let personBMI = mass / (height * height);

  return personBMI;
}

let BMIMark = calculateBMI(massMark, heightMark);
let BMIJohn = calculateBMI(massJohn, heightJohn);

console.log(BMIMark, BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);