'use strict'

import { Types } from '../constants'
import logic from '../../../logic'

export function getUserProducts() {
    return async function (dispatch, getState) {
        const products = await logic.listUserProducts()
        dispatch({ type: Types.UPDATE_USER_PRODUCTS, products })
    }
}