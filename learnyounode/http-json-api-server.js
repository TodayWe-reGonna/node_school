'use strict'
const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    let parsedURL = url.parse(req.url, true)
    let dated = new Date(parsedURL.query.iso)
    if (req.method == 'GET'){
        res.writeHead(200, {'Content-Type':'application/json'})
    }
    if (parsedURL.pathname == '/api/parsetime')
        res.end(JSON.stringify({
            hour: dated.getHours(),
            minute: dated.getMinutes(),
            second: dated.getSeconds()
        }))

    if (parsedURL.pathname == '/api/unixtime') {
        res.end(JSON.stringify({
                unixtime: dated.getTime()
            }))
    }

})


server.listen(+process.argv[2])