/**
 * File: server.js
 * Descrição: Responsável por levantar o serviço
 * Author: Vinícius
 * Data: 27/03/2019
 */

 //Config Setup App
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require('./app/controller/authController')(app)

app.listen(8080)