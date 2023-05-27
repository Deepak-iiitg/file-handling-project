const http = require('http');
const fs = require('fs');
http.createServer((req,res)=>{
    res.writeHead(200,"content-type:text/plain");
    const result = fs.readFileSync('file.txt');
    res.end(result);
}).listen(4000);