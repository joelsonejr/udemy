/* 
1. Read temperatures from a given array.
2. Print those temperatures a complex output which consists of:
    a. Three dots '...'
    b. The temperature from the array
    c. The phrase 'in n days', in which n is the number of days ahead
    d. Three dots '...' again.

    example:
    '... 17C in 1 days ... 21C in 2 days ... 23C in 3 days...'

According to that data, the sentence structure is:
    DOTS + TEMP + N DAYS

Idea 01: 
Create a loop and an array containing every forecast sentence, than print such 
    array. Print the array

Idea 02: 
    Create a loop and build the sentence on the spot. Print in each 
    interation. - CHOSEN ONE!!!!!

*/

'use strict';

const spacer = '...';
const initialDay = 1;
const testData = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let day = '';
  let numberOfDays;
  let currentForecast = '';
  let sentenceHead;

  for (let i = 0; i < arr.length; i++) {
    numberOfDays = 1 + i;

    if (i <= 0) {
      day = 'day';
      sentenceHead = '...';
    } else {
      day = 'days';
      sentenceHead = '';
    }

    currentForecast += `${sentenceHead} ${arr[i]}°C in ${numberOfDays} ${day} ${spacer} `;
  }

  console.log(currentForecast);
};

printForecast(testData);
