'use strict'

require('dotenv').config()

const { mongoose, models: { Product, Address, User, Category, Bid } } = require('data')
const { expect } = require('chai')
const logic = require('.')
const _ = require('lodash')

const { env: { DB_URL_TEST } } = process

describe('logic (auction)', () => {

    const image01 = 'https://firebasestorage.googleapis.com/v0/b/auction-app-da584.appspot.com/o/product01.png?alt=media&token=98d69ce5-7c4c-4665-811f-b4a2bf15e150' // Macbook 13
    const category01 = new Category({ name: 'Laptops' })
    const address01 = new Address({ line1: 'carrer major nº1', line2: 'baixos 3a', city: 'barcelona',  province: 'barcelona', postcode: '08770', country: 'Spain' })
    const user01 = new User({ email: 'jd@email.com', password: '123', name: 'John', surname: 'Doe', role: 'customer', registerDate: Date.now(), products: [], address: address01, wishes:[] })
    const bid01 = new Bid({ price: 120, date: Date.now(), user: user01 })
    const bid02 = new Bid({ price: 150, date: Date.now(), user: user01 })

    const title = 'MacBook Pro de 13 pulgadas 128GB',
        description = 'Intel Core i5 de doble núcleo a 2,3 GHz8 GB de memoria RAM128 GB flash PCIeIntel Iris Plus Graphics 640',
        startDate = Date.now(),
        endDate = Date.now(),
        startPrice = 100,
        currentPrice = 150,
        currentUser = user01,
        currentBid = bid02,
        closed = false,
        images = [image01],
        category = category01,
        winningBid = null,
        winningUser = null,
        bids = [bid01, bid02]

    const product = {
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
    }

    const indexes = []

    before(() => mongoose.connect(DB_URL_TEST))

    beforeEach(() => {
        let count = 10 + Math.floor(Math.random() * 10)
        indexes.length = 0
        while (count--) indexes.push(count)

        return Promise.all([Product.remove(), User.remove()])
    })

    describe('list products', () => {
        it('should succeed on correct data', () => {

            const products = indexes.map(() => new Product(product).save())

            return Promise.all(products)
                .then(() => {
                    return logic.listProducts()
                        .then(products => {
                            expect(products).to.exist
                            expect(products.length).to.equal(indexes.length)
                            expect(products.length).to.not.equal(150)
                            expect(products.length).to.not.equal(0)
                        })
                })
        })

    })


    describe('list user products', () => {
        it('should succeed on correct data', async () => {

            const category = await category01.save()
            const user = await user01.save()

            const products = indexes.map(() => new Product(product).save())


            return Promise.all(products)
                .then(() => {
                    return logic.listUserProducts(user._id)
                        .then(products => {
                            expect(products).to.exist
                            expect(products.length).to.equal(indexes.length)
                            expect(products.length).to.not.equal(150)
                            expect(products.length).to.not.equal(0)
                        })
                })
        })

    })

    describe('retrieve product', () => {
        it('should succeed on correct data', () => {

            const newProduct = new Product(product)

            return newProduct.save()
                .then(res => {
                    return logic.retrieveProduct(res._id.toString())
                        .then(res => {
                            expect(res).to.exist
                            expect(res.title).to.equal(title)
                            expect(res.description).to.equal(description)
                            expect(res.title).not.to.equal('fake title')
                        })
                })

        })

        it('should fail on no correct data', () => {

            const newProduct = new Product(product)

            return newProduct.save()
                .then(res => {
                    return logic.retrieveProduct('5b190a7b91a1554b1fa8b106')
                        .catch(({ message }) => expect(message).to.equal(`no product found with id 5b190a7b91a1554b1fa8b106`))
                })

        })
    })

    describe('add product', () => {
        it('should succeed on correct data', () => {
            return logic.addProduct(
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
            ).then(res => {
                return Product.findOne({ title })
                    .then(data => {
                        expect(res).to.be.true
                        expect(data.title).to.equal(title)
                        expect(data.description).to.equal(description)
                    })
            })
        })
    })

    describe('add bid', () => {
        it('should succeed on correct data', async () => {

            const _address = {
                line1: 'carrer major nº1',
                line2: 'baixos 3a',
                city: 'barcelona',
                province: 'barcelona',
                postcode: '08770',
                country: 'Spain'
            }

            const newAddress = new Address(_address)

            const _user = {
                email: 'email@email.com',
                password: '123',
                name: 'lilam',
                surname: 'gimenez',
                role: 'admin',
                registerDate: Date.now(),
                products: [],
                address: newAddress,
                wishes: []
            }

            const newUser = await new User(_user).save()

            const _product = {
                title: 'Mac Book Pro 2011',
                description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit semper euismod, commodo urna dis ante erat sem aliquet aenean, tempor nulla non mauris a curabitur molestie metus. Sodales odio porttitor interdum sed iaculis luctus auctor tincidunt, et nunc tortor hendrerit aliquet vel sociosqu sociis, euismod senectus per pellentesque dis egestas est.',
                startDate: '2012-04-23T18:25:43.511Z',
                endDate: '2012-04-23T18:25:43.511Z',
                startPrice: 500,
                currentPrice: 500,
                closed: false,
                image: 'la url de la imagen',
                category: null,
                winningBid: null,
                winningUser: null,
                bids: []
            }
            const newProduct = await new Product(_product).save()

            const userId = newUser._id
            const productId = newProduct._id
            const _price = 600

            return logic.addBid(productId, userId, _price)
                .then(bidId => {
                    expect(bidId).to.be.a('string')
                    expect(bidId).to.exist

                    return Product.findById(productId.toString())
                        .then(product => {
                            expect(product).to.exist

                            expect(product.bids).to.exist
                            expect(product.bids.length).to.equal(1)

                            const [{ _id, price }] = product.bids

                            expect(_id.toString()).to.equal(bidId)
                            expect(price).to.equal(_price)
                        })
                })

        })
        
        it('should fail on add bid with lower price ', async () => {
    
            const _address = {
                line1: 'carrer major nº1',
                line2: 'baixos 3a',
                city: 'barcelona',
                province: 'barcelona',
                postcode: '08770',
                country: 'Spain'
            }

            const newAddress = new Address(_address)

            const _user = {
                email: 'email@email.com',
                password: '123',
                name: 'lilam',
                surname: 'gimenez',
                role: 'admin',
                registerDate: Date.now(),
                products: [],
                address: newAddress,
                wishes: []
            }

            const newUser = await new User(_user).save()

            const _product = {
                title: 'Mac Book Pro 2011',
                description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit semper euismod, commodo urna dis ante erat sem aliquet aenean, tempor nulla non mauris a curabitur molestie metus. Sodales odio porttitor interdum sed iaculis luctus auctor tincidunt, et nunc tortor hendrerit aliquet vel sociosqu sociis, euismod senectus per pellentesque dis egestas est.',
                startDate: '2012-04-23T18:25:43.511Z',
                endDate: '2012-04-23T18:25:43.511Z',
                startPrice: 500,
                currentPrice: 500,
                closed: false,
                image: 'la url de la imagen',
                category: null,
                winningBid: null,
                winningUser: null,
                bids: []
            }
            const newProduct = await new Product(_product).save()

            const userId = newUser._id
            const productId = newProduct._id
            const _price = 400

            return logic.addBid(productId, userId, _price)
                .catch(({ message }) => expect(message).to.equal('the bid price is lower'))

        })

    })

    describe('list categories', () => {
        it('should succeed on correct data', async () => {
            const category = await category01.save()

            return logic.listCategories()
                .then(categories => {
                    expect(categories).to.be.a('array')
                    expect(categories[0]).to.exist
                    expect(categories[0].name).to.equal(category.name)
                })

         })
    })

    describe('authenticate user', () => {
        it('should succeed on correct data', () =>
            user01.save()
                .then(() =>
                    logic.authenticateUser('jd@email.com', '123')
                        .then(id => expect(id).to.exist)
                )
        )

        it('should fail on no user email', () =>
            logic.authenticateUser()
                .catch(({ message }) => expect(message).to.equal('user email is not a string'))
        )

        it('should fail on empty user email', () =>
            logic.authenticateUser('')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on blank user email', () =>
            logic.authenticateUser('     ')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on no user password', () =>
            logic.authenticateUser('jd@email.com')
                .catch(({ message }) => expect(message).to.equal('user password is not a string'))
        )

        it('should fail on empty user password', () =>
            logic.authenticateUser('jd@email.com', '')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )

        it('should fail on blank user password', () =>
            logic.authenticateUser('jd@email.com', '     ')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )
    })

    describe('retrieve user', () => {
        it('should succeed on correct data', () =>
            user01.save()
                .then(({ _id }) => {
                    return logic.retrieveUser(_id.toString())
                })
                .then(user => {
                    expect(user).to.exist

                    const { name, surname, email, _id, password} = user

                    expect(name).to.equal('John')
                    expect(surname).to.equal('Doe')
                    expect(email).to.equal('jd@email.com')

                })
        )

        it('should fail on no user id', () =>
            logic.retrieveUser()
                .catch(({ message }) => expect(message).to.equal('user id is not a string'))
        )

        it('should fail on empty user id', () =>
            logic.retrieveUser('')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )

        it('should fail on blank user id', () =>
            logic.retrieveUser('     ')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )
    })

    describe('register user', () => {
        it('should succeed on correct dada', () =>
            logic.registerUser('John', 'Doe', 'jd@mail.com', '123')
                .then(res => expect(res).to.be.true)
        )

        it('should fail on already registered user', () =>
            user01.save()
                .then((user) => {
                    const { name, surname, email, password } = user

                    return logic.registerUser(name, surname, email, password)
                        .catch(({ message }) => {
                            expect(message).to.equal(`user with email ${user.email} already exists`)
                        })
                })

        )

        it('should fail on no user name', () =>
            logic.registerUser()
                .catch(({ message }) => expect(message).to.equal('user name is not a string'))
        )

        it('should fail on empty user name', () =>
            logic.registerUser('')
                .catch(({ message }) => expect(message).to.equal('user name is empty or blank'))
        )

        it('should fail on blank user name', () =>
            logic.registerUser('     ')
                .catch(({ message }) => expect(message).to.equal('user name is empty or blank'))
        )

        it('should fail on no user surname', () =>
            logic.registerUser('John')
                .catch(({ message }) => expect(message).to.equal('user surname is not a string'))
        )

        it('should fail on empty user surname', () =>
            logic.registerUser('John', '')
                .catch(({ message }) => expect(message).to.equal('user surname is empty or blank'))
        )

        it('should fail on blank user surname', () =>
            logic.registerUser('John', '     ')
                .catch(({ message }) => expect(message).to.equal('user surname is empty or blank'))
        )

        it('should fail on no user email', () =>
            logic.registerUser('John', 'Doe')
                .catch(({ message }) => expect(message).to.equal('user email is not a string'))
        )

        it('should fail on empty user email', () =>
            logic.registerUser('John', 'Doe', '')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on blank user email', () =>
            logic.registerUser('John', 'Doe', '     ')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on no user password', () =>
            logic.registerUser('John', 'Doe', 'jd@email.com')
                .catch(({ message }) => expect(message).to.equal('user password is not a string'))
        )

        it('should fail on empty user password', () =>
            logic.registerUser('John', 'Doe', 'jd@email.com', '')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )

        it('should fail on blank user password', () =>
            logic.registerUser('John', 'Doe', 'jd@email.com', '     ')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )
    })

    after(done => mongoose.connection.db.dropDatabase(() => mongoose.connection.close(done)))
})