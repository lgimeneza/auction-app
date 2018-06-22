'use strict'

const jwt = require('jsonwebtoken')

let _secret = 'NO-SECRET'

function jwtValidator(req, res, next) {
    let message

    const { params: { userId } } = req

    try {
        const auth = req.get('authorization') // Bearer CHURRO-TOKEN

        const token = auth.split(' ')[1]

        const { user: {_id} } = jwt.verify(token, _secret)

        if (_id !== userId) message = `user id ${userId} does not match token user id ${_id}`

        if (!message) return next()
    } catch (err) {
        message = `invalid token ${err}`
    }

    res.status(401)
    res.json({ status: 'KO', error: message })
}

module.exports = function(secret) {
    _secret = secret

    return jwtValidator
}