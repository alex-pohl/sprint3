"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require('http');
const url = process.argv[2];
http.get(url, (response) => {
    response.setEncoding('utf-8');
    let result = '';
    response.on('data', (chunk) => result += chunk);
    response.on('error', console.error);
    response.on('end', () => {
        console.log(result.length);
        console.log(result);
    });
});
