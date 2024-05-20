// requerir dependencias
const http = require('http');

// enrutado
const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.write('Hello, world!');
        response.end();
    } else if (request.url === '/about') {
        response.write('About me: My name is Izzy');
        response.end();
    } else {
        response.statusCode = 404;
        response.write('404 Page');
        response.end();
    }
})

// levantar server
server.listen(5005, () => {
    console.log("Server running on port 5005");
})