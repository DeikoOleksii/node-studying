const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome to homepage')
    }
    if(req.url === '/about'){
        res.end('info')
    }
    res.end(
    `<h1>oops</h1>`)
})

server.listen(5000)