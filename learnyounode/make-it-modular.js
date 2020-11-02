const heavyLifter = require('./mymodule')
const dir = process.argv[2];
const ext = process.argv[3]

heavyLifter(dir, ext, function callback(err, result){
    return err ? err : result.forEach(el=>console.log(el))
})

// const theCallback = (err, result) => {
//     return err ? err : result.forEach(el => {
//         console.log(el)
//     });
// }

// heavyLifter(dir, ext, theCallback)