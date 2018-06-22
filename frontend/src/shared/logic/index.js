'use strict'

const auctionApi = require('api')

//auctionApi.url = 'http://localhost:5000/api'
auctionApi.url = 'https://mysterious-basin-61944.herokuapp.com/api'

const logic = {

    /**
     * Saves the logged user's info. Must be overrided in App.
     * @param {Object<User>} user - User object like { email: 'email02@email.com', password: '123', name: 'Chas', surname: 'Keaveny', role: 'customer' }
     */
    user(user) {
        if (user) {
            this._user = user

            return
        }

        return this._user
    },

    /**
     * Retrieve a list of products with the search and filter criteria.
     * @param {string} query - Search criteria string
     * @param {Array<string>} categories - Array of category id to filter
     * @param {Array<string>} prices - Range of prices to filter [min, max]
     */
    listProducts(query, categories, prices){
        return auctionApi.listProducts(query, categories, prices)
    },

    /**
     * Retrieve the user's bid list. Use the user stored in this logic.
     *  @returns {Promise<[Product]>} - Array of product objects
     */
    listUserProducts(){
        const user = this.user()

        if (user === null){
            return auctionApi.retrieveUser()
        }

        return auctionApi.listUserProducts(user._id)
    },

    /**
     * Retrieve a product with a given id
     * @param {string} productId - id of product to retrive
     * @returns {Promise<Product>} - Product object
     */
    retrieveProduct(productId){
        return auctionApi.retrieveProduct(productId)
    },

    /**
     * Save a bid for a given product
     * @param {string} productId - id of bidding product 
     * @param {string} userId - id of bidding user. Must be logged
     * @param {number} price - the bid price
     * @returns {Promise<string>} - Bid id string
     */
    addProductBid(productId, userId, price){
        return auctionApi.addProductBid(productId, userId, price)
    },

    /**
     * Retrieve a list of product categories available. It is used to filter the products.
     * @returns {Promise<[Category]>} - Array of categories
     */
    listCategories(){
        return auctionApi.listCategories()
    },

    /**
     * Authenticate the user and log in saving the user info in this logic.
     * @param {string} username - The username to log in. Email of the user.
     * @param {string} password - User's password.
     * @returns {Object<User>}} - User object.
     */
    login(username, password) {
        return auctionApi.authenticateUser(username, password)
            .then(user => {
                // login successful if there's a jwt token in the response
                if (user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    this.user(user)
                    //localStorage.setItem('user', JSON.stringify(user));
                }

                return user;
            })
            .catch(error => {
                this.logout();
                return Promise.reject(error);
            })
    },

    /**
     * Set user info saved in this logic to null
     * @returns {Objec<User>}
     */
    logout(){
        return Promise.resolve()
        .then(()=> {
            this.user(null)
        })
    },

    /**
     * Retrieves the user info.
     * @returns {Object<User>} - User's object
     */
    retrieveUser(){
        const user = this.user()

        if (user === null){
            return auctionApi.retrieveUser()
        }
        
        return auctionApi.retrieveUser(user._id)
    },

    /**
     * Register a user with the data provided.
     * @param {string} name 
     * @param {string} surname 
     * @param {string} email 
     * @param {string} password 
     * @returns {Promise<boolean>}
     */
    register(name, surname, email,  password){
        return auctionApi.registerUser(name, surname, email,  password)
            .then(() => {
                return true;
            })
            .catch(error => {
                return Promise.reject(error);
            })
    },

}

module.exports = logic