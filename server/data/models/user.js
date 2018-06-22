'use strict'

const mongoose = require('mongoose')
const { User } = require('./schemas')

module.exports = mongoose.model('User', User)