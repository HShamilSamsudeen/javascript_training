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
const calcTip = billValue => {
  if (billValue >= 50 || billValue <= 300) {
    return parseFloat(billValue * 0.15);
  } else {
    return parseFloat(billValue * 0.2);
  }
};

// Q2.
const bills = new Array(125, 555, 44);

// Q3.
const tips = new Array(
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[bills.length - 1])
);

// Q4.

const total = new Array();

function addTipAndBill(a, b) {
  return a + b;
}

for (let i = 0; i < bills.length; i++) {
  total.push(addTipAndBill(bills[i], tips[i]));
}

console.log("Bills: ", bills);
console.log("Tips: ", tips);
console.log("Total: ", total);
