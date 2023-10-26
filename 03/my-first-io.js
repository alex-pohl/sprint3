"use strict";
const fs = require('fs');
let file = process.argv[2];
try {
    const fileData = fs.readFileSync(file, 'utf8');
    const newLines = fileData.split('\n');
    console.log(newLines.length - 1);
}
catch (err) {
    console.error("Can't read file", err);
}
