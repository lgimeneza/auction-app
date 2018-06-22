'use strict'

const { models: { Product, User, Bid, Category }, mongoose: { Types: { ObjectId } } } = require('data')

const logic = {

    /**
     * Retrieve a list of products with the search and filter criteria.
     * @param {string} query - Search criteria string
     * @param {Array<string>} categories - Array of category id to filter
     * @param {Array<string>} prices - Range of prices to filter [min, max]
     */
    listProducts(query, categories, prices) {
        return Promise.resolve()
            .then(() => {
                const criteria = { $match: {} }
                const sort = { $sort: { endDate: -1 } }

                if (typeof query != 'undefined' && query.length > 0) {
                    criteria.$match.$text = { $search: query }
                    sort.$sort.score = { $meta: "textScore" }
                }

                if (categories instanceof Array && categories.length) {
                    const _categories = categories.map(category => ObjectId(category))
                    criteria.$match.category = { $in: _categories }
                }

                if (prices instanceof Array && prices.length) {
                    const [min, max] = prices

                    criteria.$match.currentPrice = {}

                    if (min) criteria.$match.currentPrice.$gte = min
                    if (max) criteria.$match.currentPrice.$lte = max
                }

                const stages = [criteria, sort]

                stages.push({
                    $project: {
                        _id: 1, title: 1, description: 1, startDate: 1, endDate: 1,
                        //startPrice: 1, closed: 1, images: 1, maxBid: { $ifNull: [{ $max: '$bids.price' }, '$startPrice'] }
                        startPrice: 1, closed: 1, images: 1, currentPrice: 1
                    }
                })

                return Product.find({endDate: { $lt: Date.now() }})
                    .then(res => {
                        res.forEach(product => {

                            return Product.findByIdAndUpdate(product._id.toString(), { closed: true, winningBid: product.currentBid, winningUser: product.currentUser }, { new: true })
                                .then( result => result )

                        })
                    }).then(() => {

                        return Product.aggregate(stages)
                            .then(products => {
                                if (!products) throw Error(`no products found`)

                                return products
                            })

                    })


            })
    },

    /**
     * Retrieve the user's bid list.
     *  @returns {Promise<[Product]>} - Array of product objects
     */
    listUserProducts(userId){
        return Promise.resolve()
            .then(() => {

                return Product.find({endDate: { $lt: Date.now() }})
                .then(res => {
                    res.forEach(product => {

                        return Product.findByIdAndUpdate(product._id.toString(), { closed: true, winningBid: product.currentBid, winningUser: product.currentUser }, { new: true })
                            .then( result => result )

                    })
                }).then(() => {

                    return User.findById(userId)
                        .then(user => {
                            if (!user) throw Error(`no user found with id ${userId}`)

                            //{ winningUser: user }
                            return Product.find({ 'bids.user': user })
                            .then(products => {
                                if (!products) throw Error('products not fount')
        
                                return products
                            })
                        })
                    })
            })
    },

    /**
     * Retrieve a product with a given id
     * @param {string} productId - id of product to retrive
     * @returns {Promise<Product>} - Product object
     */
    retrieveProduct(productId) {
        return Promise.resolve()

            .then(() => {

                return Product.aggregate([
                    { $match: { _id: ObjectId(productId), } },
                    {
                        $project: {
                            _id: 1, title: 1, description: 1, startDate: 1, endDate: 1,
                            //startPrice: 1, closed: 1, images: 1, maxBid: { $ifNull: [{ $max: '$bids.price' }, '$startPrice'] }
                            startPrice: 1, closed: 1, images: 1, currentPrice: 1
                        }
                    },
                ])
                    .then(product => {
                        if (!product[0]) throw Error(`no product found with id ${productId}`)

                        return product[0]
                    })

            })

    },

    /**
     * Save a product
     * @param {string} title 
     * @param {string} description 
     * @param {Date} startDate 
     * @param {Date} endDate 
     * @param {number} startPrice 
     * @param {boolean} closed 
     * @param {string} image 
     * @returns {Promise<Boolean>}
     */
    addProduct(
        title,
        description,
        startDate,
        endDate,
        startPrice,
        currentPrice,
        currentUser,
        currentBid,
        closed,
        images,
        category,
        winningBid,
        winningUser,
        bids
    ) {
        return Promise.resolve()
            .then(() => {
                return Product.create({
                    title,
                    description,
                    startDate,
                    endDate,
                    startPrice,
                    currentPrice,
                    currentUser,
                    currentBid,
                    closed,
                    images,
                    category,
                    winningBid,
                    winningUser,
                    bids,
                })
            })
            .then(() => true)
    },

    /**
     * Save a bid for a given product
     * @param {string} productId - id of bidding product 
     * @param {string} userId - id of bidding user. Must be logged
     * @param {number} price - the bid price
     * @returns {Promise<string>} - Bid id string
     */
    addBid(productId, userId, price) {
        //TODO: not alow lower or closed bid
        return Promise.resolve()
            .then(() => {
                return User.findById(userId)
                    .then(user => {
                        if (!user) throw Error(`no user found with id ${userId}`)

                        return Product.findById(productId)
                            .then(productmatch => {
                                if(!productmatch) throw Error(`no product found with id ${productId}`)
                                if(productmatch.closed) throw Error('the product is closed')
                                if(productmatch.currentPrice > price) throw Error('the bid price is lower')
                                
                                const bid = new Bid({ price, date: Date.now(), user: user._id })
                                return Product.findByIdAndUpdate(productId, { $push: { bids: bid }, currentPrice: price, currentUser: user, currentBid: bid }, { new: true })
                                    .then(product => {
                                        if (!product) throw Error(`no product found with id ${productId}`)
        
                                        return bid._id.toString()
                                    })
                            })

                    })
            })
    },

    /**
     * Retrieve a list of product categories available. It is used to filter the products.
     * @returns {Promise<[Category]>} - Array of categories
     */
    listCategories() {
        return Promise.resolve()
            .then(() => {
                return Category.find()
                    .then(categories => {
                        if (!categories) throw Error('no categories found')

                        return categories
                    })
            })
    },

    /**
     * Authenticate the user
     * @param {string} email 
     * @param {string} password 
     * @returns {Object<User>}} - User object.
     */
    authenticateUser(email, password) {
        return Promise.resolve()
            .then(() => {
                if (typeof email !== 'string') throw Error('user email is not a string')

                if (!(email = email.trim()).length) throw Error('user email is empty or blank')

                if (typeof password !== 'string') throw Error('user password is not a string')

                if ((password = password.trim()).length === 0) throw Error('user password is empty or blank')

                return User.findOne({ email, password })
            })
            .then(user => {
                if (!user) throw Error('wrong credentials')

                return user
            })
    },

    /**
     * Retrieves the user info.
     * @param {string} id
     * @returns {Promise<User>} 
     */
    retrieveUser(id) {
        return Promise.resolve()
            .then(() => {
                if (typeof id !== 'string') throw Error('user id is not a string')

                if (!(id = id.trim()).length) throw Error('user id is empty or blank')

                return User.findById(id) //.select({ _id: 0, name: 1, surname: 1, email: 1 })
            })
            .then(user => {
                if (!user) throw Error(`no user found with id ${id}`)

                return user
            })
    },

    /**
     * Register a user with the data provided.
     * @param {string} name 
     * @param {string} surname 
     * @param {string} email 
     * @param {string} password 
     * @returns {Promise<boolean>}
     */
    registerUser(name, surname, email, password) {
        return Promise.resolve()
            .then(() => {
                if (typeof name !== 'string') throw Error('user name is not a string')

                if (!(name = name.trim()).length) throw Error('user name is empty or blank')

                if (typeof surname !== 'string') throw Error('user surname is not a string')

                if ((surname = surname.trim()).length === 0) throw Error('user surname is empty or blank')

                if (typeof email !== 'string') throw Error('user email is not a string')

                if (!(email = email.trim()).length) throw Error('user email is empty or blank')

                if (typeof password !== 'string') throw Error('user password is not a string')

                if ((password = password.trim()).length === 0) throw Error('user password is empty or blank')

                return User.findOne({ email })
                    .then(user => {
                        if (user) throw Error(`user with email ${email} already exists`)

                        return User.create({ name, surname, email, password, registerDate: Date.now(), role: 'customer' })
                            .then(() => true)
                    })
            })
    },

}

module.exports = logic