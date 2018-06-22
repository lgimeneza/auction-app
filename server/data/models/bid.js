'use strict'

const mongoose = require('mongoose')
const { Bid } = require('./schemas')

module.exports = mongoose.model('Bid', Bid)