'use strict'

const { Schema, Schema: { Types: { ObjectId } } } = require('mongoose')

module.exports = new Schema({
    price: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    user: {
        ref: 'User',
        type: ObjectId,
        required: true
    }
})