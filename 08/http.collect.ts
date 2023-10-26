

const http = require('http');
const { IncomingMessage } = http;
const url = process.argv[2];

http.get(url, (response: typeof IncomingMessage) => {
    response.setEncoding('utf-8');

    let result: string='';

    response.on('data', (chunk: string) => result += chunk );

    response.on('error', console.error);

    response.on('end', () => {
        console.log(result.length)
        console.log(result);
    })



})

