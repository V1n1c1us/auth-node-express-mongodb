/**
 * File: server.js
 * Descrição: Responsável por levantar o serviço
 * Author: Vinícius
 * Data: 27/03/2019
 */

 //Config Setup App
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const request = require('request')

const PORT = process.env.PORT || 8080 //definindo a porta -> PORT

const router = express.Router() //criando a instância das rotas via express

const Produto = require('./app/models/produto')

//conecta com o mongodb cloud
mongoose.connect('mongodb+srv://dbVinicius:<Viniciusdfran123>@cluster0-59tb7.mongodb.net/test?retryWrites=true',
    { useNewUrlParser: true
})

//configuração da variavel app para usar o 'bodyParser()'
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//========================================//
/**Rotas da API */
router.use('/', (req, res, next) => {
    console.log('TA TENU AQUI!.....')
    next()
})
router.get('/', (req, res, next) =>{
    res.json({ message: 'Bem vindo ao App'})
})
//============== API's ================//
router.get('/', (req, res) =>{
    res.json({ message: 'Bem vindo ao App'})
})
//========================================//

//definindo padrão das rotas prefixadas: /api -> http://localhost:PORT/api/
app.use('/api', router)

//inicia o servidor (Aplicação)
app.listen(PORT)
console.log("iniciando a app na porta " + PORT)