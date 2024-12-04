let fs = require('fs');
let rows = fs.readFileSync('input.txt').toString().split("\n");

// We need a Width and a Height - we will assume it is a rectangular wordsearch and that all rows are the same length
const WIDTH = rows[0].length;
const HEIGHT = rows.length;

// Keep a running total of how many times we have found the Search Word
let runningTotal = 0;

rows.forEach((row, rowIndex) => {
    if (row.length > 0) {
        [...row].forEach((letter, colIndex) => {
            if (letter === 'A') {
                if (
                    rowIndex > 0 && rowIndex < HEIGHT - 1 &&
                    colIndex > 0 && colIndex < WIDTH - 1 &&
                    (
                        (rows[rowIndex + 1][colIndex + 1] === 'M' && rows[rowIndex - 1][colIndex - 1] === 'S') ||
                        (rows[rowIndex + 1][colIndex + 1] === 'S' && rows[rowIndex - 1][colIndex - 1] === 'M')
                    ) &&
                    (
                        (rows[rowIndex + 1][colIndex - 1] === 'M' && rows[rowIndex - 1][colIndex + 1] === 'S') ||
                        (rows[rowIndex + 1][colIndex - 1] === 'S' && rows[rowIndex - 1][colIndex + 1] === 'M')
                    )
                ) {
                    runningTotal++;
                }
            }
        });
    }
});

console.log(runningTotal);