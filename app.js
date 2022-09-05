const fs = require('fs');
const http = require('http');

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    const url = req.url
    console.log(url)
    res.statusCode = 200;
    if (url == "/hello.html") {
        res.setHeader('Content-Type', 'text/html');
        fs.readFile("hello.html", (err, data) => {
            res.end(data)
        })
        return
    }
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});