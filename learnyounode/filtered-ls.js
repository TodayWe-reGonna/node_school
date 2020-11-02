const fs = require("fs");


let pathToFiles = process.argv[2];
let extension = process.argv[3]

fs.readdir(pathToFiles, function callback(err, list) {
    if (err) return console.log(err.message)
    let fList = list.filter(el => el.indexOf('.') > (-1) && el.endsWith(extension))
    for (item of fList) {
        console.log(item)
    }
})