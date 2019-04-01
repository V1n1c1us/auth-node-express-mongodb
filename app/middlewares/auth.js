const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization

    if(!authHeader)
        return res.status(401).send({ error: 'No token provided'})
    
    console.log("1")

    const parts = authHeader.split(' ')

    if(!parts.length === 2)
        return res.status(401).send({ error: 'Token Error'})

    console.log("2")

    const [ scheme, token ] = parts
    console.log(parts)

    if(!/^Bearer$/i.test(scheme))
        return res.status(401).send({ error: 'Token malformated'})

        console.log("4")
    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) return res.status(401).send({ error: 'Token invalid' })

        req.userId = decoded.id 
        return next()
    })
}
