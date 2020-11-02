'use strict'
const http = require('http')
const map = require('through2-map')

let port = +process.argv[2]

const server = http.createServer((req, res) => {
  req.pipe(map(chunk=>{
      return chunk.toString().toUpperCase()
  })).pipe(res)
  
})
    


server.listen(port)