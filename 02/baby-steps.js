"use strict";
function finalFunction(myArray) {
    let result = 0;
    for (let i of myArray) {
        let num = parseFloat(i);
        if (!isNaN(num)) {
            result += num;
        }
    }
    return String(result);
}
const processArgs = process.argv.slice(2);
console.log(finalFunction(processArgs));
module.exports.finalFunction = finalFunction;
module.exports.processArgs = process.argv.slice(2);
