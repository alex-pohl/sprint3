"use strict";
const http = require('http');
const url = require('url');
const port = process.argv[2];
function parseTime(time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds(),
    };
}
function unixTime(time) {
    return {
        unixtime: time.getTime(),
    };
}
const rutas = {
    '/api/parsetime': (parsedUrl) => {
        const isoValue = parsedUrl.searchParams.get('iso');
        if (isoValue !== null) {
            const time = new Date(isoValue);
            return JSON.stringify(parseTime(time));
        }
        return 'Invalid ISO date format';
    },
    '/api/unixtime': (parsedUrl) => {
        const isoValue = parsedUrl.searchParams.get('iso');
        if (isoValue !== null) {
            const time = new Date(isoValue);
            return JSON.stringify(unixTime(time));
        }
        return 'Invalid ISO date format';
    },
};
const server = http.createServer((req, res) => {
    const parsedUrl = new url.URL(req.url || '', `http://localhost:${port}`);
    const ruta = rutas[parsedUrl.pathname];
    res.writeHead(200, { 'Content-Type': 'application/JSON' });
    if (ruta) {
        const result = ruta(parsedUrl);
        res.end(result);
    }
    else {
        res.end('Invalid route');
    }
});
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
