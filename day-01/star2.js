let fs = require('fs');
let puzzleInput = fs.readFileSync('input.txt').toString().split("\n");

let firstLocations = [];
let secondLocations = [];

puzzleInput.forEach((line) => {
    let parseLine = line.split('   ');
    
    if (parseLine[0] != '') firstLocations.push(parseLine[0]);
    if (parseLine[1] != '') secondLocations.push(parseLine[1]);
});

let similarityScore = 0;

firstLocations.forEach((firstLocation) => {
    let occurancesInSecond = secondLocations.filter((secondLocation) => secondLocation === firstLocation).length;

    let locationSimilarityScore = occurancesInSecond > 0 ? firstLocation * occurancesInSecond : 0;

    similarityScore += locationSimilarityScore;
});

console.log(similarityScore);