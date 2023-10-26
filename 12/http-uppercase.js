"use strict";
const http = require('http');
const map = require('through2-map'); // npm i through2-map
const port = process.argv[2]; // Asignamos puerto, primer elemento pasado al CLI
const server = http.createServer((req, res) => {
    if (req.method === 'POST') { //solo aplicamos la lógica a las llamas tipo POST
        req.pipe(map((datos) => datos.toString().toUpperCase())).pipe(res); // Recibimos los datos, los metemos en MAP (como un array) como string en MAYUS, todo eso se devuelve a la respuesta (res).
    }
});
server.listen(port, () => console.error('ERROR')); // Escuchamos al servidor o en su defecto nos tira un error 'ERROR';
