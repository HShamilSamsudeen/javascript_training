/* Practicing the switch statement*/

// const day = prompt('Let\'s figure out plans for your day, what day is it?: ');

// switch(day.toLowerCase()){
//     case 'monday':
//     case 'tuesday':
//     case 'wednesday':
//     case 'thursday':
//         console.log('Work');
//         break;
//     case 'friday':
//         console.log('TGIF! Work and then party :D');
//         break;
//     case 'saturday':
//         console.log('Thank god it\'s saturday, enjoy your day off!');
//         break;
//     case 'sunday':
//         console.log('Run errands, then rest in preparation for work tomorrow');
//         break;
//     default:
//         console.log('Not a valid day');
// }

// function eatFood(units, food) {
//   console.log(`Ate ${units} ${food}`);
//   console.log(`Yum`);
//   return true;
// }

// const tacos = eatFood("5", "tacos");
// console.log(`Ate: ${tacos}`);

/* 
Function declaration = vanilla function - not anonymous can be called before the function is initialized
Function expressions = anonymous function assigned to a variable, variable can be called like the function. Cannot be called before the variable is initialized with the function.
Arrow functions are basically one liner function expressions - return is implied and not required (only if its a one liner function). Structure follows variable = parameter => return <event>
*/

// My first arrow function
// const countryCode = code => {
//     let cc = '';
//     if(code == 'CA' || code == 'US'){
//         cc = '+1';
//     } else if(code == 'LKA'){
//         cc = '+94';
//     } else {
//         cc = 'Let me google the country code for you..';
//     }
//     return cc;
// }

// const input = prompt('What country (abbreviation) are you dialling? ');
// console.log(countryCode(input.toUpperCase()));

/* 
Coding Challenge #1

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time

Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/

// Data 1
// const dolphinsScore1 = 44;
// const dolphinsScore2 = 23;
// const dolphinsScore3 = 71;

// const koalasScore1 = 64;
// const koalasScore2 = 54;
// const koalasScore3 = 49;

// Data 2
// const dolphinsScore1 = 85;
// const dolphinsScore2 = 54;
// const dolphinsScore3 = 41;

// const koalasScore1 = 23;
// const koalasScore2 = 34;
// const koalasScore3 = 27;

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const dolphinsAvg = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3);
// const koalasAvg = calcAverage(koalasScore1, koalasScore2, koalasScore3);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(
//       `Dolphins win (${avgDolphins.toFixed(0)} vs. ${avgKoalas.toFixed(0)})`
//     );
//     return true;
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(
//       `Koalas win (${avgKoalas.toFixed(0)} vs. ${avgDolphins.toFixed(0)})`
//     );
//     return true;
//   } else {
//     console.log(
//       `No one wins since neither team has atleast double the average score of the other team (Dolphins: ${avgDolphins.toFixed(
//         0
//       )} vs. Koalas: ${avgKoalas.toFixed(0)})`
//     );
//     return -1;
//   }
// }

// console.log(checkWinner(dolphinsAvg, koalasAvg));

/*
Coding Challenge #2

Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.

Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip

Test data: 125, 555 and 44
*/

// Q1.
// const calcTip = billValue => {
//   if (billValue >= 50 && billValue <= 300) {
//     return parseFloat(billValue * 0.15);
//   } else {
//     return parseFloat(billValue * 0.2);
//   }
// };

// Q2.
// const bills = new Array(125, 555, 44);

// Q3.
// const tips = new Array(
//   calcTip(bills[0]),
//   calcTip(bills[1]),
//   calcTip(bills[bills.length - 1])
// );

// Q4.
// const total = new Array();

// function addTipAndBill(a, b) {
//   return a + b;
// }

// for (let i = 0; i < bills.length; i++) {
//   total.push(addTipAndBill(bills[i], tips[i]));
// }

// console.log("Bills: ", bills);
// console.log("Tips: ", tips);
// console.log("Total: ", total);

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "Teacher",
//   friends: ["Michael", "Peter", "James"],
//   hasDriversLicense: true,
//   CalcAge: function () {
//     return 2022 - this.birthYear;
//   },
//   Summary: function () {
//     return console.log(
//       `${
//         this.firstName
//       } is a ${this.CalcAge()} year old ${this.job.toLowerCase()}.`
//     );
//   },
// };

// console.log(jonas.CalcAge())
// console.log(jonas.Summary());

/*
Coding Challenge #3

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! 

Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
*/

// Q1. & Q2.
// const Mark = {
//   firstName: "Mark",
//   lastName: "Miller",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     return (this.mass / this.height ** 2).toFixed(1);
//   },
// };

// const John = {
//   firstName: "John",
//   lastName: "Smith",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = (this.mass / this.height ** 2).toFixed(1);
//     return this.bmi;
//   },
// };

// Q3.
// if (John.calcBMI() > Mark.calcBMI()) {
//   console.log(
//     `John's BMI (${John.calcBMI()}) is higher than Mark's (${Mark.calcBMI()})!"`
//   );
// } else if (John.calcBMI() < Mark.calcBMI()) {
//   console.log(
//     `John's BMI (${John.calcBMI()}) is lower than Mark's (${Mark.calcBMI()})!"`
//   );
// } else {
//   console.log(`They both have equal BMI's!`);
// }

/* 
Coding Challenge #4

Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!

Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉
Bonus:

4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:

4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together

4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)

4.3. Call the function with the 'totals' array 
*/

// Q1.
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Q2.
const tips = new Array();
const totals = new Array();

// Q3.
const calcTip = billValue => {
  if (billValue >= 50 && billValue <= 300) {
    return billValue * 0.15;
  } else {
    return billValue * 0.2;
  }
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
}

console.log(`bills array: ${bills}`);
console.log(`tips array: ${tips}`);
console.log(`totals array: ${totals}`);

//  Q4.
function calcAverage(arr) {
  let flag = false;
  array_check = Array.isArray(arr);
  array_check ? (flag = true) : console.log("Input an array..");

  while (flag) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    average = total / arr.length;
    return average;
  }
  return -1;
}

console.log(`\nExecuting calcAverage.. `);
console.log(calcAverage(bills));
console.log(`Done `);
