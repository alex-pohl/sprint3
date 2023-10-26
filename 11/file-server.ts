const http = require('http');
const fs = require('fs');

const port = process.argv[2]; // primer argumento de CLI
const fileName = process.argv[3]; // segundo argumento del CLI

const server = http.createServer((req: any, res: any) => { // creamos servidor con un callback, request y response. TIPOS NO FUNCIONAN http.IncomingMessage
    fs.createReadStream(fileName).pipe(res); // Usamos el método recomendado para leer el contenido del archivo y .pipe para devolver el texto leído a la response
});

server.listen(port, () => console.log('listening on port '+port)); // Ejecutamos un listen, abrimos el localhost: port y vemos el texto.
