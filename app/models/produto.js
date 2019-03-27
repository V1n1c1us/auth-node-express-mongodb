/**
 * File: produto.js
 * Descrição: Responsável por tratar o modelo da classe produto
 * Author: Vinícius
 * Data: 27/03/2019
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

/**
 * Class Produto
 * 
 * id: int
 * nome: string
 * preco: number
 * descricao: string
 */

 const ProdutoSchema = new Schema({
     nome: String,
     preco: Number,
     descricao: String
 })

 module.exports = mongoose.model('Produto', ProdutoSchema)