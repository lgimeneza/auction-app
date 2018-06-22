'use strict'

const { Schema, Schema: { Types: { ObjectId } } } = require('mongoose')
const Bid = require('./bid')

module.exports = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
    },
    startPrice: {
        type: Number,
        required: true
    },
    currentPrice: {
        type: Number,
        required: true
    },
    currentUser: {
        ref: 'User',
        type: ObjectId,
    },
    currentBid: {
        ref: 'Bid',
        type: ObjectId,
    },
    closed: {
        type: Boolean,
    },
    images: {
        type: [String],
    },
    category: {
        ref: 'Category',
        type: ObjectId,
    },
    winningBid:{
        ref: 'Bid',
        type: ObjectId,
    },
    winningUser:{
        ref: 'User',
        type: ObjectId,
    },
    bids:[Bid]

    // Index for full text search in MongoDB
}).index({ title: 'text', description: 'text' });
