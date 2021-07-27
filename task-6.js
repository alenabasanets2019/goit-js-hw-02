"usestrict"

let input;
const numbers = [];
let total = 0;
do {  
    input = prompt("Input your number", 0);
    numbers.push(input);
    if ( input === null ) {
        for (let i = 0; i < numbers.length; i++) {
            total += +numbers[i];
        }
        console.log(`The total sum of the numbers is equal to ${total}`); 
        break;
    }
}
while (input)