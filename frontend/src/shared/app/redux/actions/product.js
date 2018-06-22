'use strict'

import { Types } from '../constants';
import logic from '../../../logic'

export function getProduct(id) {
    return async function (dispatch, getState) {
        const data  = await logic.retrieveProduct(id)
        dispatch({ type: Types.UPDATE_PRODUCT, payload: data })
    }
}

export function addProductBid(productId, userId, bid) {
    return async function (dispatch, getState) {
        const data  = await logic.addProductBid(productId, userId, bid)
        dispatch({ type: Types.ADD_PRODUCT_BID, payload: data })
    }
}