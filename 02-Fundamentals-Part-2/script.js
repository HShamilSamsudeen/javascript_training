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




/* 
Function declaration = vanilla function - not anonymous can be called before the function is initialized
Function expressions = anonymous function assigned to a variable, variable can be called like the function. Cannot be called before the variable is initialized with the function.
Arrow functions are basically one liner function expressions - return is implied and not required (only if its a one liner function). Structure follows variable = parameter => return <event>
*/

// My first arrow function 
const countryCode = code => {
    let cc = '';
    if(code == 'CA' || code == 'US'){
        cc = '+1';
    } else if(code == 'LKA'){
        cc = '+94';
    } else {
        cc = 'Let me google the country code for you..';
    }
    return cc;
}

const input = prompt('What country (abbreviation) are you dialling? ');
console.log(countryCode(input.toUpperCase()));


