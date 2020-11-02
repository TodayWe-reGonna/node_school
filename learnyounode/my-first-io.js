
function printLineNum(process){
const fs = require('fs')
let length = fs.readFileSync(process.argv[2], 'utf8').split('\n').length-1
console.log(length)

}

printLineNum(process)