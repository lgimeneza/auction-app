'use strict'

import { Types } from '../constants'

const initialState = {
    products:[]
}

export default function userProducts(state = initialState, action) {
    switch (action.type) {
        case Types.UPDATE_USER_PRODUCTS:
            return action.products
        default:
            return state
    }
}