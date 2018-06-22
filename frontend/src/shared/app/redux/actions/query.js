'use strict'

import { Types } from '../constants'

export function setQuery(query) {
    return async function (dispatch, getState) {
        dispatch({ type: Types.UPDATE_QUERY, query })
    }
}
