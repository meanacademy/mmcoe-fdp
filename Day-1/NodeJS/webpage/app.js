let http = require('http');
let path = require('path');
let fs = require('fs');

http.createServer((req, res) => {
    if (req.url == '/') {
        let filePath = path.join(__dirname, 'index.html');
        fs.readFile(filePath, (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end();
        })
    } else if (req.url == '/contact') {
        let filePath = path.join(__dirname, 'contact.html');
        fs.readFile(filePath, (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end();
        })
    } else if (req.url == '/about') {
        let filepath = path.join(__dirname, 'about.html');
        fs.readFile(filepath, (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end();
        })
    } else {
        res.write("Page not found");
        res.end();
    }

}).listen(3000, () => {
    console.log('Server listening on port 3000...');
})