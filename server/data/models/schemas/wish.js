'use strict'

const { Schema, Schema: { Types: { ObjectId } } } = require('mongoose')

module.exports = new Schema({
    product:{
        ref: 'Product',
        type: ObjectId,
    },
})