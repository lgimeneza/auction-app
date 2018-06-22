'use strict'

import { Types } from '../constants'

const initialState = {}

export default function user(state = initialState, action) {
    switch (action.type) {
        case Types.UPDATE_USER:
            return action.payload
        default:
            return state;
    }
}