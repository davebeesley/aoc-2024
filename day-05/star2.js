let fs = require('fs');
let puzzleInput = fs.readFileSync('input.txt').toString().split("\n");

let rules = [];
let updates = [];

let checkRules = (update, rules) => {
    let updateFixed = false;
    let fails = 0;
    rules.forEach((ruleString) => {
        rule = ruleString.split('|');

        if (update.includes(rule[0]) && update.includes(rule[1])) {
            let firstIndex = update.indexOf(rule[0]);
            let secondIndex = update.indexOf(rule[1]);

            if (firstIndex > secondIndex) {
                fails++;
                update[secondIndex] = rule[0];
                update[firstIndex] = rule[1];
                updateFixed = true;
            }
        }
    });

    if (updateFixed && fails > 1) checkRules(update, rules);
    if (updateFixed) return update;
    return false; 
}

puzzleInput.forEach((line) => {
    if (line.includes('|')) rules.push(line);
    if (line.includes(',')) updates.push(line);
});

let fixedUpdates = [];

updates.forEach((updateString) => {
    let update = updateString.split(',');
    let fixedUpdate = checkRules(update, rules);
    
    if (fixedUpdate) fixedUpdates.push(fixedUpdate);
});

let result = 0;

fixedUpdates.forEach((update) => result += parseInt(update[Math.floor(update.length / 2)]));

console.log(result);