"use strict";
const net = require('net'); // Protocolo TCP
const port = process.argv[2]; // primer argumento del CLI
const server = net.createServer((socket) => {
    const fecha = new Date(); //Generamos la fecha al momento de ejecutar (diamesaño + hora)
    const texto = fecha.getFullYear() //Del objeto Date (fecha) le pillamos el año
        + '-' // guión ( lo pido el enunciado)
        + String(fecha.getMonth() + 1).padStart(2, '0') // Month entiende enero como 0, por tanto le sumamos 1 y lo pasamos a string
        + '-'
        + String(fecha.getDate()).padStart(2, '0') // Pillamos días
        + ' '
        + String(fecha.getHours()).padStart(2, '0') //Pasamos los datos a string
        + ':'
        + String(fecha.getMinutes()).padStart(2, '0') // Same
        + '\n';
    socket.end(texto); //Enviamos la respuesta de vuelta
});
server.listen(port); // EScuchamos el servidor en el puerto indicado
