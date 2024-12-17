const http = require('http')

    http.createServer((req,res)=>{
        res.write('<h1>Kanzareya Pradip</h1>')
        res.end()
    }).listen(8000);