const http = require('http');
const fs = require('fs');
const path = require('path');

const indexHtmlFile = path.join(__dirname, 'static', 'index.html');
const scriptFile = path.join(__dirname, 'static', 'script.js');
const styleFile = path.join(__dirname, 'static', 'style.css');

const server = http.createServer((req, res) => {
    switch(req.url) {
        case '/': return res.end(indexHtmlFile);
        case '/script.js': return res.end(scriptFile);
        case '/style.css': return res.end(styleFile);
    }
});

server.listen(3000);