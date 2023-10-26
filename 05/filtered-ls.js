"use strict";
const fs = require('fs');
const path = require('path');
let file = process.argv[2];
let extension = '.' + process.argv[3];
let list = fs.readdir(file, (err, files) => {
    if (err) {
        console.error('Whatever whatever error whatever', err);
    }
    else {
        files.forEach(file => {
            if (path.extname(file) === extension) {
                console.log(file);
            }
        });
    }
});
