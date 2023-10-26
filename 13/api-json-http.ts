const http = require('http'); // incluído en node
const port = process.argv[2] // definimos el puerto ( primer argumento pasado al cli)

function parseTime(time: Date) { // Creamod una función para cada retorno
    return { // retornamos un objeto JSON con los datos
        hora : time.getHours(), // asignamos las horas
        minutos : time.getMinutes(), // "" minutos
        segundos : time.getSeconds() // "" segundos
    }
}

function unixTime(time: Date){ // lo mismo para el unixtime (total ms desde nosecuando)
    return{
        unixtime : time.getTime() // formato para recibir el tiempo en unix
    }
}
const rutas: { [key: string]: (parsedUrl: any) => any } = { // más problemas de tipos, por más que intento no comprendo que falla
    '/api/parsetime': (parsedUrl) => {
        
        const isoValue = parsedUrl.get('iso');
        if (isoValue !== null){
            const time = new Date(isoValue);
            return parseTime(time);
        }

    },
    '/api/unixtime': (parsedUrl) => {
        const isoValue = parsedUrl.get('iso');
        if (isoValue !== null){
            const time = new Date(isoValue);
            return unixTime(time);
        }
    }
 }

 const server = http.createServer((req: any, res: any) => { // tipos http.IncomingMessage y parecidos no dejan de dar errores.
    const parsedUrl = new URL(req.url, `http://localhost:${port}`);
    const ruta = rutas[parsedUrl.pathname];

    res.writeHead(200, {'Content-Type' : 'application/JSON'});
    res.end(ruta(parsedUrl));
 });


server.listen(port);