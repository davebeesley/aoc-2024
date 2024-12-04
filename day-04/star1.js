let fs = require('fs');
let rows = fs.readFileSync('input.txt').toString().split("\n");

// We need a Width and a Height - we will assume it is a rectangular wordsearch and that all rows are the same length
const WIDTH = rows[0].length;
const HEIGHT = rows.length;

const DIRECTIONS = [
    [1, 0], // East
    [1, 1], // South East
    [0, 1], // South
    [-1, 1], // South West
    [-1, 0], // West
    [-1, -1], // North West
    [0, -1], // North
    [1, -1], // North East
];

const SEARCH = 'XMAS';

// Keep a running total of how many times we have found the Search Word
let runningTotal = 0;

rows.forEach((row, rowIndex) => {
    if (row.length > 0) {
        [...row].forEach((letter, colIndex) => {
            if (letter === SEARCH[0]) {
                DIRECTIONS.forEach((direction) => {
                    for (let i = 1; i <= SEARCH.length - 1; i++) {
                        let coordY = rowIndex + (direction[0] * i);
                        let coordX = colIndex + (direction[1] * i);
                        if (coordY < HEIGHT && coordY >= 0 && coordX < WIDTH && coordX >= 0) {
                            if (rows[coordY][coordX] === SEARCH[i]) {
                                if (i === SEARCH.length - 1) {
                                    runningTotal++;
                                    break;
                                }
                            } else {
                                break;
                            }
                        }
                    }
                });
            }
        });
    }
});

console.log(runningTotal);