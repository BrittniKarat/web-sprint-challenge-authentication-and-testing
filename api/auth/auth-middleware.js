const Users = require('../users/users-model')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../../config')

const validateUniqueUsername = async (req, res, next) => {
    try {
        const { username } = req.body
        const user = await Users.get()        
        user.map(each => {
                if ( each.username === username ) {
                    next({ status: 406, message: "username taken" })
                }
            })
    next()
    } catch (err) {
        next(err)
    }
}

const validateInfo = async (req, res, next) => {
    try {
        const { username, password } = req.body
        if (!username || !password) {
            next({ status: 400, message: "username and password required" })
        }
        next()
    } catch (err) {
        next(err)
    }
}

const tokenBuilder = (user) => {
    const payload = {
        subject: user.id,
        username: user.username
    }
    const options = {
        expiresIn: '1d'
    }
    const token = jwt.sign(payload, JWT_SECRET, options)

    return token
}

module.exports = {
    validateUniqueUsername,
    validateInfo,
    tokenBuilder 
}