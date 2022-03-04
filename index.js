var express = require('express')
var app = express()
var pessoas = require('./aquivo.json')

app.get('/', function (req, res) {
    res.send(pessoas)
})

app.get('/:id?', function (req, res) {
    res.send(pessoas.id)
})

app.listen(3000)