console.log('Welcome to the demo');

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(theServer);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function theServer(req, res) {
    if(req.url === '/status') {
        const otherData = '{"message":"Everything is good","createdBy":"Saul"}';

        const status = {
            message: JSON.parse(otherData),
            createdAt: new Date().toISOString()
        };
        if(new Date().getMilliseconds % 2 === 0) {
            status.bonus = 'You Win!'
        }
        res.setHeader("Content-Type", 'application/json');
        res.statusCode = 200;
        res.end(JSON.stringify(status));
        return;
    } 

    if(req.url === '/tacos') {
        res.end('They are delicious!')
    } else {
    console.log(req);
    res.statusCode = 200; // Ok.
    res.setHeader('Content-Type', 'text/plain');
    res.end('This is a Node Web Server!!');
    }
}

