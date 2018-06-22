'use strict'

const mongoose = require('mongoose')
const { Address } = require('./schemas')

module.exports = mongoose.model('Address', Address)