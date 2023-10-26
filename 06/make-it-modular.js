"use strict";
const myModule = require('./mymodule');
const dirPath = process.argv[2]; // desktop
const ext = process.argv[3]; // txt
const callback = (err, data) => {
    if (err) {
        console.error('Error ocurred');
    }
    else {
        const filteredData = data.join('\n');
        console.log(filteredData);
    }
};
myModule(dirPath, ext, callback);
