'use strict'
const express = require('express');
const app = express();
let indexLoc = process.argv[3]

app.set('view engine', 'pug')
app.set('views', indexLoc)
app.get('/home', (req, res)=>{
    res.render('index', {date: new Date().toDateString()})
})

app.listen(process.argv[2])