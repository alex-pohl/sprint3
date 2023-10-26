import { IncomingMessage, ServerResponse } from "http";

import http from 'http'; // Viene incluído en node
const url = process.argv[2]; // 0 node 1 directory 2 url input

const request = http.get(url, (response: IncomingMessage) => {
   response.setEncoding('utf-8'); // Para que lo entienda como un 'string'


    response.on('data', console.log);// forma corta de: response.on('data', (data) => {console.log(data)};
    //Error handling en la response:
    response.on('error', console.error); // forma corta de response.on('error', (error) => {console.log(error)})
})

//Error handling en la request:
request.on('error', console.log);