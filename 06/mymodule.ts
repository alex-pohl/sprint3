

const path = require('node:path');
const fs = require("node:fs")
module.exports = function myModule(dirPath: string, ext: string, callback: Function) {
    fs.readdir(dirPath, (err: Error, data: string[]) => {
        ext = `.${ext}`;
        if (err){
            return callback(err, null)
        }else{
            const finalArr =  data
                .filter(file => path.extname(file) === ext)
            
            callback(null,finalArr);

            }
        }
    )}
