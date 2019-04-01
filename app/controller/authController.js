const express = require('express')

const User = require('../models/User')
const bcrypt = require('bcryptjs')

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


router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email }).select('+password')

    if(!user) {
        return res.status(400).send({ error: 'User not Found'})
    }

    if(!await bcrypt.compare(password, user.password)) {
        return res.status(400).send({ error: 'Invalid Password'})
    }

    user.password = undefined
    res.send({ user })
})


module.exports = app => app.use('/api', router)