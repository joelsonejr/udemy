let massMark = 50;
const heightMark = 1.69;

let massJohn = 50;
const heightJohn = 1.69;

function calculateBMI(mass, height) {
  let personBMI = mass / (height * height);

  return personBMI;
}

let BMIMark = calculateBMI(massMark, heightMark);
let BMIJohn = calculateBMI(massJohn, heightJohn);

if(BMIMark > BMIJohn){
  console.log(`Mark's BMI (${BMIMark}) is higher than Jhon's (${BMIJohn}) !`);
} else if(BMIMark < BMIJohn){
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark}) !`);
} else {
  console.log(`Mark and John have the same BMI (${BMIMark}) 🫢`);
}
