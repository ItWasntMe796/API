const http = require('http');

http.createServer((req, res) => {
    res.write(JSON.stringify({"name": 'web'}))
    res.end()
}).listen(8080)

console.log('listening on port 8080')