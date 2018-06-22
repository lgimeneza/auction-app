'use strict'

const { Schema, Schema: { Types: { ObjectId } } } = require('mongoose')

module.exports = new Schema({
    line1: {
        type: String,
        required: true
    },
    line2: {
        type: String,
    },
    city: {
        type: String,
        required: true
    },
    province:{
        type: String,
        required: true
    },
    postcode:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
})
