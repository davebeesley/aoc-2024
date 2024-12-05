let fs = require('fs');
let puzzleInput = fs.readFileSync('input.txt').toString().split("\n");

let rules = [];
let updates = [];

puzzleInput.forEach((line) => {
    if (line.includes('|')) rules.push(line);
    if (line.includes(',')) updates.push(line);
});

let middlePageNumbers = [];

updates.forEach((updateString) => {
    let update = updateString.split(',');
    let testResults = [];

    rules.forEach((ruleString) => {
        rule = ruleString.split('|');

        if (update.includes(rule[0]) && update.includes(rule[1])) {
            let firstIndex = update.indexOf(rule[0]);
            let secondIndex = update.indexOf(rule[1]);

            if (firstIndex < secondIndex) {
                testResults.push(true);
            } else {
                testResults.push(false);
            }
        }
    });

    if (!testResults.includes(false)) {
        middlePageNumbers.push(update[Math.floor(update.length / 2)]);
    }
});

let result = 0;

middlePageNumbers.forEach((number) => {
    result += parseInt(number);
});

console.log(result);