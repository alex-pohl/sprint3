"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http")); // Viene incluído en node
const url = process.argv[2]; // 0 node 1 directory 2 url input
const request = http_1.default.get(url, (response) => {
    response.setEncoding('utf-8'); // Para que lo entienda como un 'string'
    response.on('data', console.log); // forma corta de: response.on('data', (data) => {console.log(data)};
    //Error handling en la response:
    response.on('error', console.error); // forma corta de response.on('error', (error) => {console.log(error)})
});
//Error handling en la request:
request.on('error', console.log);
