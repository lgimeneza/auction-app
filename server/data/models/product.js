'use strict'

const mongoose = require('mongoose')
const { Product } = require('./schemas')

module.exports = mongoose.model('Product', Product)