const http = require('http');
const file = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  file.readFile('./index.html', (e, html) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.writeHeader(200, { "Content-Type": "text/html" });
    res.write(html);
    res.end();
  });

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});