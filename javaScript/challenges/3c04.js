'use strict';

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

//Calculating the tip value
function calcTip(bills) {
  for (let bill = 0; bill < bills.length; bill++) {
    const billValue = bills[bill];

    const tip =
      billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

    tips.push(tip);
    totals.push(billValue + tip);
  }
  console.log(`Bills: ${bills}`);
  console.log(`Tips: ${tips}`);
  console.log(`Totals: ${totals}`);
}

//Calculating the average of all the bills (tips included).
// function calcAverage(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     let average = sum / arr.length;

//     return average;
// }

//Using a function expression to calculate the average of all the bills (tips included).
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const average = sum / arr.length;

  console.log(`Average of the tips: ${average}`);

  return average;
};

calcTip(bills);
calcAverage(totals);
