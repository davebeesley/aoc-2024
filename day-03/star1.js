let fs = require('fs');
let puzzleInput = fs.readFileSync('input.txt').toString();

let mul = (a, b) => a * b;

let regexp = /mul\([0-9]{1,3},[0-9]{1,3}\)/g;
let multiplications = puzzleInput.match(regexp);

let total = 0;

multiplications.forEach((thisMul) => {
    let mulValue = eval(thisMul);

    total += mulValue;
})

console.log(total);