let fs = require('fs');
let puzzleInput = fs.readFileSync('input.txt').toString().split("\n");

let safeCount = 0;

puzzleInput.forEach((report) => {
    let levels = report.split(' ');
    let lastLevel = undefined;
    let lastDifference = undefined;
    let reportSafe = levels.length > 1 ? true : false;
    
    levels.forEach((level, index) => {
        if (!reportSafe) {
            return;
        }

        if (!lastLevel) {
            lastLevel = level;
            return;
        }

        let difference = parseInt(lastLevel) - parseInt(level);

        if (difference === 0) {
            reportSafe = false;
            return;
        }

        if (lastDifference && lastDifference > 0 && difference < 0) {
            reportSafe = false;
            return;
        }

        if (lastDifference && lastDifference < 0 && difference > 0) {
            reportSafe = false;
            return;
        }

        if (difference > 3 || difference < -3) {
            reportSafe = false;
            return;
        }
        
        lastLevel = level;
        lastDifference = difference;
    });

    if (reportSafe) {
        safeCount++;
    }
});

console.log(safeCount);