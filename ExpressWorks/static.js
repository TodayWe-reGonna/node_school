'use strict'
const express = require('express');
const path = require('path')
const app = express();
let argPath = process.argv[3]
let portNum = process.argv[2]

app.use(express.static(argPath) || path.join(__dirname, 'public'))

app.listen(portNum)