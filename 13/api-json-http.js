"use strict";
const http = require('http'); // incluído en node
const port = process.argv[2]; // definimos el puerto ( primer argumento pasado al cli)
function parseTime(time) {
    return {
        hora: time.getHours(), // asignamos las horas
        minutos: time.getMinutes(), // "" minutos
        segundos: time.getSeconds() // "" segundos
    };
}
function unixTime(time) {
    return {
        unixtime: time.getTime() // formato para recibir el tiempo en unix
    };
}
const rutas = {
    '/api/parsetime': (parsedUrl) => {
        const isoValue = parsedUrl.get('iso');
        if (isoValue !== null) {
            const time = new Date(isoValue);
            return parseTime(time);
        }
    },
    '/api/unixtime': (parsedUrl) => {
        const isoValue = parsedUrl.get('iso');
        if (isoValue !== null) {
            const time = new Date(isoValue);
            return unixTime(time);
        }
    }
};
const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://localhost:${port}`);
    const ruta = rutas[parsedUrl.pathname];
    res.writeHead(200, { 'Content-Type': 'application/JSON' });
    res.end(ruta(parsedUrl));
});
server.listen(port);
