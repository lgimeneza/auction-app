'use strict'

const { Schema, Schema: { Types: { ObjectId } } } = require('mongoose')
const Address = require('./address')
const Wish = require('./wish')

module.exports = new Schema({
    email: {
        type: String,
        required: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'customer']
    },
    registerDate:{
        type: Date,
        required: true
    },
    products:[{
        ref: 'Product',
        type: ObjectId,
    }],
    address:Address,
    wishes:[Wish]
})