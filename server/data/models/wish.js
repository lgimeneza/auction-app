'use strict'

const mongoose = require('mongoose')
const { Wish } = require('./schemas')

module.exports = mongoose.model('Wish', Wish)