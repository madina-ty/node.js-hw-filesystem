const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    switch (req.url) {
        case '/':
            fs.readFile('./index.html', (err, data) => {
                if (err) {
                    res.end('Error loading page');
                    return;
                }
                res.end(data);
            });
            break;

        case '/about':
            fs.readFile('./about.html', (err, data) => {
                if (err) {
                    res.end('Error loading page');
                    return;
                }
                res.end(data);
            });
            break;

        case '/contact':
            fs.readFile('./contact.html', (err, data) => {
                if (err) {
                    res.end('Error loading page');
                    return;
                }
                res.end(data);
            });
            break;

        default:
            res.end('Page not found');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});