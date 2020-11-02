'use strict'

const net = require('net')
const http = require('http')
const fs = require('fs')

let port = process.argv[2]
let fileToServe = process.argv[3]

const server = http.createServer((req, res) => {
    let readStream = fs.createReadStream(fileToServe)
    readStream.on('open', ()=>{
        readStream.pipe(res)
    })
readStream.on('error', (err)=>{
    res.end(err)
})
    
})



server.listen(port)