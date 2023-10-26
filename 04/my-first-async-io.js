"use strict";
const fs = require('fs');
let file = process.argv[2];
fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
        console.error("Can't read file", err);
    }
    else {
        const newLines = data.split('\n');
        console.log(newLines.length - 1);
    }
});
