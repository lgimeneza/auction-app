'use strict'

import { Types } from '../constants'
import logic from '../../../logic'

export function getProducts(query, categories, prices) {
    return async function (dispatch, getState) {
        const products = await logic.listProducts(query, categories, prices)
        dispatch({ type: Types.UPDATE_PRODUCTS, products })
    }
}

