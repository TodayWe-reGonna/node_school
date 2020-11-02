'use strict'
const http = require('http')
const concat = require('concat-stream')
let results = []
let count = 0

function processProcess(process) {
    let urls = process.argv.slice(2)
    urls.forEach((el, index) => {
        http.get(el, res => {
            res.setEncoding('utf8')
            res.pipe(concat(result => {
                results[index] = result
                count++
                if (count == 3) {
                    results.forEach(el => console.log(el))
                }
            }))
        })
    })
}
processProcess(process)