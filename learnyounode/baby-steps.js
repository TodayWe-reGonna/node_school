function sumArgs(process) {

    
    let sum = 0
    for (let i = 2; i < process.argv.length ; i++) {
        sum += +process.argv[i]
    }
    console.log( sum)
    return sum
}

sumArgs(process)