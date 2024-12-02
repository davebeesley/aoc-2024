let fs = require('fs');
let puzzleInput = fs.readFileSync('input.txt').toString().split("\n");

let firstLocations = [];
let secondLocations = [];

puzzleInput.forEach((line) => {
    let parseLine = line.split('   ');
    
    if (parseLine[0] != '') firstLocations.push(parseLine[0]);
    if (parseLine[1] != '') secondLocations.push(parseLine[1]);
});

let sortedFirstLocations = firstLocations.sort();
let sortedSecondLocations = secondLocations.sort();

let accumulatedDistance = 0;

sortedFirstLocations.forEach((location, index) => {
    let difference = location - sortedSecondLocations[index];

    if (difference < 0) {
        difference = difference * -1;
    }

    accumulatedDistance += difference;
});

console.log(accumulatedDistance);