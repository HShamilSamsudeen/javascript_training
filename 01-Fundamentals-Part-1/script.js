/*
let js = 'amazing';
if (js === 'amazing') alert('JavaScript is fun!');
console.log(5*2);

// Assignment
// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console

let country = 'Sri Lanka';
let continent = 'Island off coast of India';
let population = '26,000,000';

console.log(country);
console.log(continent);
console.log(`${population} 👩👨🧑👧👦🤴`);
*/

/*
let markHeight = 1.69;
let johnHeight = 1.95;
let markWeight = 78;
let johnWeight = 92;

BMI = markWeight / markHeight ** 2 

console.log(BMI);
*/

// Coding Challenge #1

// let massMark = 78;
// let heightMark = 1.69;
// let massJohn = 92;
// let heightJohn = 1.95;

// let massMark = 96;
// let heightMark = 1.88;
// let massJohn = 85;
// let heightJohn = 1.76;


// bmiMark = massMark / heightMark ** 2;
// bmiJohn = massJohn / heightJohn ** 2;

// markHigherBMI = bmiMark>bmiJohn

// console.log(`Mark's BMI is ${bmiMark}`);
// console.log(`John's BMI is ${bmiJohn}`);
// console.log(`Is Mark's BMI higher than John's?: ${markHigherBMI}`);


// Coding Challenge #2

// const massMark = 96;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;


// bmiMark = massMark / heightMark ** 2;
// bmiJohn = massJohn / heightJohn ** 2;

// markHigherBMI = bmiMark>bmiJohn

// if (bmiMark<bmiJohn) {
//     console.log(`John's BMI (${bmiJohn.toFixed(2)}.toFixed(2)) is higher than Mark's (${bmiMark.toFixed(2)})!`)
// } else {
//     console.log(`Mark's BMI (${bmiMark.toFixed(2)}) is higher than John's (${bmiJohn.toFixed(2)})!`)
// }



// Coding challenge #3

// const scoreDolphins = [96,108,89];
// const scoreKoalas = [88,91,110];

// var totalDolphins = 0;
// var totalKoalas = 0;

// for (let i=0; i < scoreDolphins.length; i++){
//     totalDolphins += scoreDolphins[i]; 
// }

// for (let i=0; i < scoreKoalas.length; i++){
//     totalKoalas += scoreKoalas[i]; 
// }

// Q1
// const avgDolphins = totalDolphins / scoreDolphins.length;
// const avgKoalas = totalKoalas / scoreKoalas.length;

// Q2
// if (avgKoalas > avgDolphins) {
//     console.log(`Koalas win the gymnastics competition! With an average score of ${avgKoalas.toFixed(2)}`);
// } else if (avgKoalas < avgDolphins) {
//     console.log(`Dolphins win the gymanstics competition! With an average score of ${avgDolphins.toFixed(2)}`);
// } else {
//     console.log("It's a draw!");
//     console.log(avgDolphins);
//     console.log(avgKoalas);
// }

// Q3 - Bonus 1

// const scoreDolphins = [97,112,101];
// const scoreKoalas = [109,95,123];

// var totalDolphins = 0;
// var totalKoalas = 0;

// for (let i=0; i < scoreDolphins.length; i++){
//     totalDolphins += scoreDolphins[i]; 
// }

// for (let i=0; i < scoreKoalas.length; i++){
//     totalKoalas += scoreKoalas[i]; 
// }
// const avgDolphins = totalDolphins / scoreDolphins.length;
// const avgKoalas = totalKoalas / scoreKoalas.length;

// const minScore = 100; 
// if (avgKoalas > avgDolphins && avgKoalas >= minScore) {
//     console.log(`Koalas win the gymnastics competition! With an average score of ${avgKoalas.toFixed(2)}`);
// } else if (avgKoalas > avgDolphins && avgKoalas > minScore) {
//     console.log(`Dolphins win the gymanstics competition! With an average score of ${avgDolphins.toFixed(2)}`);
// } else {
//     console.log("It's a draw!");
// }

// Q4 - Bonus 2

// const scoreDolphins = [97,112,90];
// const scoreKoalas = [109,95,95];

// var totalDolphins = 0;
// var totalKoalas = 0;

// for (let i=0; i < scoreDolphins.length; i++){
//     totalDolphins += scoreDolphins[i]; 
// }

// for (let i=0; i < scoreKoalas.length; i++){
//     totalKoalas += scoreKoalas[i]; 
// }
// const avgDolphins = totalDolphins / scoreDolphins.length;
// const avgKoalas = totalKoalas / scoreKoalas.length;

// const minScore = 100; 
// if (avgKoalas > avgDolphins && avgKoalas >= minScore) {
//     console.log(`Koalas win the gymnastics competition! With an average score of ${avgKoalas.toFixed(2)}`);
// } else if (avgKoalas > avgDolphins && avgKoalas >= minScore) {
//     console.log(`Dolphins win the gymanstics competition! With an average score of ${avgDolphins.toFixed(2)}`);
// } else if (avgKoalas === avgDolphins && avgKoalas >= minScore && avgDolphins >= minScore) {
//     console.log(`It's a draw! Koalas average: ${avgKoalas.toFixed(2)} & Dolphins average: ${avgDolphins.toFixed(2)}.`);
// } else if (avgKoalas === avgDolphins && avgKoalas < minScore && avgDolphins < minScore) {
//     console.log(`No one wins as both teams' average scores are equal and below 100. Koalas average: ${avgKoalas.toFixed(2)} & Dolphins average: ${avgDolphins.toFixed(2)}.`)
// }

// const day = "thursday";

// if (day === "wednesday") {
//   console.log("Work from Geotab HQ today!");
// } else if (day === "thursday") {
//   console.log("Meet with Mandie regarding feature idea!");
// } else {
//   console.log("I'm not sure what day this is lol");
// }

/*Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430*/

//Q1 && Q2

const bill = prompt("What is the bill value? ");
const tip = bill >= 50 && bill <= 300 ? 0.15 : 0.2;
const finalValue = parseFloat(bill) + parseFloat(bill * tip);

console.log(
  `For a bill value of $${bill} please give a ${
    tip * 100
  } percent tip! Total payment should be $${finalValue}`
);