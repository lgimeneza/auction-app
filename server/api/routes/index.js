'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const logic = require('logic')
const jwt = require('jsonwebtoken')
const jwtValidation = require('./utils/jwt-validation')

const router = express.Router()

const { env: { TOKEN_SECRET, TOKEN_EXP } } = process

const jwtValidator = jwtValidation(TOKEN_SECRET)

const jsonBodyParser = bodyParser.json()

router.get('/product', (req, res) => {
    const { query: { q, c, p } } = req

    const categories = c && c.split(',')
    const prices = p && p.split(',').map(price => Number(price))

    return logic.listProducts(q, categories, prices)
        .then(products => {
            res.status(200).json({ status: 'OK', data: products })
        })
        .catch(({ message }) => {
            res.status(400).json({ status: 'KO', error: message })
        })

})

router.get('/product/:productId', (req, res) => {
    const { params: { productId } } = req

    return logic.retrieveProduct(productId)
        .then(product => {
            res.status(200).json({ status: 'OK', data: product })
        })
        .catch(({ message }) => {
            res.status(400).json({ status: 'KO', error: message })
        })

})

router.get('/product/user/:userId', (req, res) => {
    const { params: { userId } } = req

    return logic.listUserProducts(userId)
        .then(products => {
            res.status(200).json({ status: 'OK', data: products })
        })
        .catch(({ message }) => {
            res.status(400).json({ status: 'KO', error: message })
        })
})

router.post('/product', jsonBodyParser, (req, res) => {
    const { body: { title, description, startDate, endDate, startPrice, closed, image } } = req

    logic.addProduct(title, description, startDate, endDate, startPrice, closed, image)
        .then(() => {
            res.status(201).json({ status: 'OK' })
        })
        .catch(({ message }) => {
            res.status(400).json({ status: 'KO', error: message })
        })
})

router.post('/product/:productId/bid/:userId', [jwtValidator, jsonBodyParser], (req, res) => {
    const { params: { productId, userId }, body: { price } } = req

    logic.addBid(productId, userId, price)
        .then(id => {
            req.app.io.emit('newBid', productId)
            res.status(201).json({ status: 'OK', data: { id } })
        })
        .catch(({ message }) => {
            res.status(400).json({ status: 'KO', error: message })
        })
})

router.get('/category', (req, res) => {

    return logic.listCategories()
        .then(categories => {
            res.status(200).json({ status: 'OK', data: categories })
        })
        .catch(({ message }) => {
            res.status(400).json({ status: 'KO', error: message })
        })

})

router.post('/auth', jsonBodyParser, (req, res) => {
    const { body: { email, password } } = req

    logic.authenticateUser(email, password)
        .then(user => {
            const token = jwt.sign({ user }, TOKEN_SECRET, { expiresIn: TOKEN_EXP })

            res.status(200).json({ status: 'OK', data: { user, token } })
        })
        .catch(({ message }) => {
            res.status(401).json({ status: 'KO', error: message })
        })
})

router.get('/users/:userId', jwtValidator, (req, res) => {
    const { params: { userId } } = req

    return logic.retrieveUser(userId)
        .then(user => {
            res.status(200)
            res.json({ status: 'OK', data: user })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })

})

router.post('/users', jsonBodyParser, (req, res) => {
    const { body: { name, surname, email, password } } = req

    logic.registerUser(name, surname, email, password)
        .then(() => {
            res.status(201)
            res.json({ status: 'OK' })
        })
        .catch(({ message }) => {
            res.status(400)
            res.json({ status: 'KO', error: message })
        })
})

module.exports = router