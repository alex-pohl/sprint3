"use strict";
const http = require('http');
const { IncomingMessage } = http;
const urls = process.argv.slice(2);
const httpRequest = (url) => {
    return new Promise((resolve, reject) => {
        http.get(url, (response) => {
            let result = '';
            response.setEncoding('utf-8');
            response.on('data', (chunk) => result += chunk);
            response.on('end', () => resolve(result));
            response.on('error', (err) => reject(err));
        });
    });
};
Promise.allSettled(urls.map(url => httpRequest(url)))
    .then((results) => {
    results.forEach((result) => {
        console.log(result.value);
    });
});
