'use strict'

const mongoose = require('mongoose')
const { Category } = require('./schemas')

module.exports = mongoose.model('Category', Category)