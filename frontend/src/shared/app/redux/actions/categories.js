'use strict'

import { Types } from '../constants'
import logic from '../../../logic'

export function getCategories() {
    return async function (dispatch, getState) {
        const _categories = await logic.listCategories()

        const categories = _categories.map(category => {
            category.checked = localStorage.getItem(category._id) === 'true'? true : false
            return category
        })
        
        dispatch({ type: Types.UPDATE_CATEGORIES, categories })
    }
}