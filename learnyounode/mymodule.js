const fs = require('fs')

module.exports = function (dirName, extension, callback) {
    fs.readdir(dirName, function (err, results) {
        if (err) return callback(err, null);
        let filtRes = results.filter(el => el.indexOf('.') > (-1) && el.endsWith(extension))
        callback(null, filtRes)
    })
}
