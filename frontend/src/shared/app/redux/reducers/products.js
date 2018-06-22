'use strict'

import { Types } from '../constants'

const initialState = {
    products:[]
}

export default function products(state = initialState, action) {
    switch (action.type) {
        case Types.UPDATE_PRODUCTS:
            return action.products
        default:
            return state
    }
}

