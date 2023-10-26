

const http = require('http');
const { IncomingMessage } = http;
const urls = process.argv.slice(2);


const httpRequest = (url: string) => {
    return new Promise((resolve, reject) => {
        http.get(url,(response: typeof IncomingMessage) => {
            let result: string = '';
            response.setEncoding('utf-8');
            response.on('data', (chunk: string) => result += chunk);
            response.on('end', () => resolve(result));
            response.on('error', (err: Error) => reject(err));
        })
    })
}
Promise.allSettled(urls.map(url => httpRequest(url)))
    .then((results) => {
        results.forEach((result) => {
            console.log((result as PromiseFulfilledResult<string>).value);
        });
    });

