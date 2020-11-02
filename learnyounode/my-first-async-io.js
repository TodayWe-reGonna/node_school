fs = require('fs')
let fPath = process.argv[2];

fs.readFile(fPath,  (err, data)=>{
    if(err) {return err;}
    console.log( data.toString().split('\n').length-1)
})
// let length = fs.readFile(process.argv[2], function callback(err, data){
//     if(err)return err
//     return (data.toString().split('\n').length-1)
// })

// console.log(length)