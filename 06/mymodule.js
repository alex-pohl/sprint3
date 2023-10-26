"use strict";
const path = require('node:path');
const fs = require("node:fs");
module.exports = function myModule(dirPath, ext, callback) {
    fs.readdir(dirPath, (err, data) => {
        ext = `.${ext}`;
        if (err) {
            return callback(err, null);
        }
        else {
            const finalArr = data
                .filter(file => path.extname(file) === ext);
            callback(null, finalArr);
        }
    });
};
