'use strict'

import { Types } from '../constants';

const initialState = ''

export default function query(state = initialState, action) {
    switch (action.type) {
        case Types.UPDATE_QUERY:
            return action.query
        default:
            return state;
    }
}