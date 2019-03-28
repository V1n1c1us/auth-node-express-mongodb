const moongose = require('mongoose')

moongose.connect('mongodb://localhost/usuarios', {useCreateIndex: true, useNewUrlParser: true})
moongose.Promise = global.Promise

module.exports = moongose