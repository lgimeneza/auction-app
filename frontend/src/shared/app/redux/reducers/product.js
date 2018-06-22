'use strict'

import { Types } from '../constants';

const initialState = {}

export default function product(state = initialState, action) {
    switch (action.type) {
        case Types.UPDATE_PRODUCT:
            return action.payload
        case Types.ADD_PRODUCT_BID:
            return action.payload
        default:
            return state
    }
}