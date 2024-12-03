let fs = require('fs');
let puzzleInput = fs.readFileSync('input.txt').toString();

let mul = (a, b) => a * b;

let regEx = /do\(\)|don\'t\(\)|mul\([0-9]{1,3},[0-9]{1,3}\)/g;
let parts = puzzleInput.match(regEx);

let doing = true;
let total = 0;

parts.forEach((part) => {
    if (doing && part.substring(0, 3) == 'mul') {
        let value = eval(part);
        total += value;
    }

    if (part.substring(0, 3) == 'do(') doing = true;
    if (part.substring(0, 3) == 'don') doing = false;
});

console.log(total);