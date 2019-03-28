const express = require('express')

const User = require('../models/User')

const router = express.Router()

router.post('/register', async (req, res) => {
    const { email, cpf } = req.body
    try {
        if(await User.findOne({ email, cpf }))
            return res.status(400).send({ error: 'User already register'})

        
        // all parameters req.body
        const user = await User.create(req.body)

        user.password = undefined

        return res.send({ user })
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed'})
        console.log(err)
    }
})

module.exports = app => app.use('/api', router)