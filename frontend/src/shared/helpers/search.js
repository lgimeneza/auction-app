'use strict'
import buildUrls from './buildUrl'

export function search(query, categories) {

	const cat = categories.filter(category => category.checked).map(category => category._id)
	const priceMin = Number(localStorage.getItem('priceMin'))
	const priceMax = Number(localStorage.getItem('priceMax'))
	
	let range = []

	if (priceMin || priceMax) {
		range[0] = priceMin || 0
		range[1] = priceMax || 0
	}

	const parameters = {}
	
	if (query.length) parameters.q = query
	if (cat.length) parameters.c = cat.join()
	if (range.length) parameters.p = range.join()

	const url =  buildUrls('/', parameters)

	return url

}
