'use strict'

const { Schema, Schema: { Types: { ObjectId } } } = require('mongoose')

module.exports = new Schema({
    name: {
        type: String,
        required: true
    },
})