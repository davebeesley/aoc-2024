let fs = require('fs');
let puzzleInput = fs.readFileSync('input.txt').toString().split("\n");

let safeCount = 0;

puzzleInput.forEach((report) => {
    let levels = report.split(' ');

    if (levels.length > 1) {
        let passedVariations = 0;
    
        for (let i = 0; i < levels.length; i++) {
            let lastLevel = undefined;
            let lastDifference = undefined;
            let variationSafe = true;
            
            levels.forEach((level, index) => {
                if (index === i) {
                    return;
                }

                if (!variationSafe) {
                    return;
                }
        
                if (!lastLevel) {
                    lastLevel = level;
                    return;
                }
        
                let difference = parseInt(lastLevel) - parseInt(level);
        
                if (difference === 0) {
                    variationSafe = false;
                    return;
                }
        
                if (lastDifference && lastDifference > 0 && difference < 0) {
                    variationSafe = false;
                    return;
                }
        
                if (lastDifference && lastDifference < 0 && difference > 0) {
                    variationSafe = false;
                    return;
                }
        
                if (difference > 3 || difference < -3) {
                    variationSafe = false;
                    return;
                }
                
                lastLevel = level;
                lastDifference = difference;
            });

            if (variationSafe) {
                passedVariations++;
            }
        }
    
        if (passedVariations > 0) {
            safeCount++;
        } 
    }
});

console.log(safeCount);