'use strict'

const net = require('net')
const port = process.argv[2]

const server = net.createServer(socket => {
    let nd = new Date()
    let yr = nd.getFullYear()
    let mo = nd.getMonth() + 1
    let dd = nd.getDate()
    let hh = nd.getHours()
    let mm = nd.getMinutes()
    let data = `${yr}-${mo}-${dd} ${hh}:${mm}\n`

    socket.end(data)
})
server.listen(port)

