// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;

// x <= 24 ? console.log('Yes') : console.log('No');

/*
Developer Skills & Editor Setup

Coding Challenge #1

Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!

Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
*/

// Q1.
function printForecast(arr) {
  let i = 0;
  while (i < arr.length) {
    var day_variable = i < 1 ? 'day' : 'days';
    console.log(`${arr[i]}ºC in ${i + 1} ${day_variable}...`);
    i++;
  }
  return true;
}

// Q2.
console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
