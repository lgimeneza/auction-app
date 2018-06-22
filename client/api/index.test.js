'use strict'

require('dotenv').config()

const { mongoose, models: { Product, Category, Address, User, Bid } } = require('data')
const { expect } = require('chai')
const jwt = require('jsonwebtoken')
const auctionApi = require('.')

const { env: { DB_URL_TEST, API_URL, TOKEN_SECRET } } = process

auctionApi.url = API_URL

describe('logic (auction api)', () => {

    const image01 = 'https://firebasestorage.googleapis.com/v0/b/auction-app-da584.appspot.com/o/product01.png?alt=media&token=98d69ce5-7c4c-4665-811f-b4a2bf15e150' // Macbook 13
    const category01 = new Category({ name: 'Laptops' })
    const address01 = new Address({ line1: 'carrer major nº1', line2: 'baixos 3a', city: 'barcelona',  province: 'barcelona', postcode: '08770', country: 'Spain' })
    const userData = { email: 'jd@email.com', password: '123', name: 'John', surname: 'Doe', role: 'customer', registerDate: Date.now(), products: [], address: address01, wishes:[] }
    const user01 = new User(userData)
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

            const _products = indexes.map(() => new Product(product).save())

            return Promise.all(_products)
            .then(() => {
                return auctionApi.listProducts('',[],[])
                .then(products => {
                    expect(products).to.exist
                    expect(products.length).to.equal(indexes.length)
                    expect(products.length).to.not.equal(150)
                    expect(products.length).to.not.equal(0)

                    products.forEach(({ title, description, startPrice }) => {
                        expect(title).to.include(product.title)
                        expect(description).to.include(product.description)
                        expect(startPrice).to.equal(product.startPrice)
                    })
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
                    return auctionApi.listUserProducts(user._id)
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
                    return auctionApi.retrieveProduct(res._id.toString())
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
                    return auctionApi.retrieveProduct('5b190a7b91a1554b1fa8b106')
                        .catch(({ message }) => expect(message).to.equal(`no product found with id 5b190a7b91a1554b1fa8b106`))
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

            const productId = newProduct._id
            const _price = 600

            return User.create(userData)
                .then((user) => {
                    const id = user._id.toString()
                    const token = jwt.sign({ user }, TOKEN_SECRET)

                    auctionApi.token(token)

                    return auctionApi.retrieveUser(id)
                })
                .then(user => {
                    return auctionApi.addProductBid(productId, user._id, _price)
                    .then(({id}) => {
                        expect(id).to.be.a('string')
                        expect({id}).to.exist
    
                        return Product.findById(productId.toString())
                            .then(product => {
                                expect(product).to.exist
    
                                expect(product.bids).to.exist
                                expect(product.bids.length).to.equal(1)
    
                                const [{ _id, price }] = product.bids
    
                                expect(_id.toString()).to.equal(id)
                                expect(price).to.equal(_price)
                            })
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

            const productId = newProduct._id
            const _price = 400

            return User.create(userData)
            .then((user) => {
                const id = user._id.toString()
                const token = jwt.sign({ user }, TOKEN_SECRET)

                auctionApi.token(token)

                return auctionApi.retrieveUser(id)
            })
            .then(user => {
                return auctionApi.addProductBid(productId, user._id, _price)
                .catch(({ message }) => expect(message).to.equal('the bid price is lower'))
            })
            

        })

    })

    describe('list categories', () => {
        it('should succeed on correct data', async () => {
            const category = await category01.save()

            return auctionApi.listCategories()
                .then(categories => {
                    expect(categories).to.be.a('array')
                    expect(categories[0]).to.exist
                    expect(categories[0].name).to.equal(category.name)
                })

         })
    })

    describe('register user', () => {
        it('should succeed on correct dada', () =>
            auctionApi.registerUser('John', 'Doe', 'jd@mail.com', '123')
                .then(res => expect(res).to.be.true)
        )

        it('should fail on already registered user', () =>
            user01.save()
                .then((user) => {
                    const { name, surname, email, password } = user

                    return auctionApi.registerUser(name, surname, email, password)
                        .catch(({ message }) => {
                            expect(message).to.equal(`user with email ${user.email} already exists`)
                        })
                })
        )

        it('should fail on no user name', () =>
            auctionApi.registerUser()
                .catch(({ message }) => expect(message).to.equal('user name is not a string'))
        )

        it('should fail on empty user name', () =>
            auctionApi.registerUser('')
                .catch(({ message }) => expect(message).to.equal('user name is empty or blank'))
        )

        it('should fail on blank user name', () =>
            auctionApi.registerUser('     ')
                .catch(({ message }) => expect(message).to.equal('user name is empty or blank'))
        )

        it('should fail on no user surname', () =>
            auctionApi.registerUser(user01.name)
                .catch(({ message }) => expect(message).to.equal('user surname is not a string'))
        )

        it('should fail on empty user surname', () =>
            auctionApi.registerUser(user01.name, '')
                .catch(({ message }) => expect(message).to.equal('user surname is empty or blank'))
        )

        it('should fail on blank user surname', () =>
            auctionApi.registerUser(user01.name, '     ')
                .catch(({ message }) => expect(message).to.equal('user surname is empty or blank'))
        )

        it('should fail on no user email', () =>
            auctionApi.registerUser(user01.name, user01.surname)
                .catch(({ message }) => expect(message).to.equal('user email is not a string'))
        )

        it('should fail on empty user email', () =>
            auctionApi.registerUser(user01.name, user01.surname, '')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on blank user email', () =>
            auctionApi.registerUser(user01.name, user01.surname, '     ')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on no user password', () =>
            auctionApi.registerUser(user01.name, user01.surname, user01.email)
                .catch(({ message }) => expect(message).to.equal('user password is not a string'))
        )

        it('should fail on empty user password', () =>
            auctionApi.registerUser(user01.name, user01.surname, user01.email, '')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )

        it('should fail on blank user password', () =>
            auctionApi.registerUser(user01.name, user01.surname, user01.email, '     ')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )

    })

    describe('authenticate user', () => {
        it('should succeed on correct data', async () => 

            User.create(userData)
                .then(() =>
                auctionApi.authenticateUser('jd@email.com', '123')
                    .then(user => {
                        expect(user).to.exist

                        expect(auctionApi.token()).not.to.equal('NO-TOKEN')
                    })
        ))

        it('should fail on no user email', () =>
            auctionApi.authenticateUser()
                .catch(({ message }) => expect(message).to.equal('user email is not a string'))
        )

        it('should fail on empty user email', () =>
            auctionApi.authenticateUser('')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on blank user email', () =>
            auctionApi.authenticateUser('     ')
                .catch(({ message }) => expect(message).to.equal('user email is empty or blank'))
        )

        it('should fail on no user password', () =>
            auctionApi.authenticateUser(user01.email)
                .catch(({ message }) => expect(message).to.equal('user password is not a string'))
        )

        it('should fail on empty user password', () =>
            auctionApi.authenticateUser(user01.email, '')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )

        it('should fail on blank user password', () =>
            auctionApi.authenticateUser(user01.email, '     ')
                .catch(({ message }) => expect(message).to.equal('user password is empty or blank'))
        )
    })

    describe('retrieve user', () => {
        it('should succeed on correct data', () =>
            User.create(userData)
                .then((user) => {
                    const id = user._id.toString()
                    const token = jwt.sign({ user }, TOKEN_SECRET)

                    auctionApi.token(token)

                    return auctionApi.retrieveUser(id)
                })
                .then(user => {
                    expect(user).to.exist

                    const { name, surname, email } = user

                    expect(name).to.equal('John')
                    expect(surname).to.equal('Doe')
                    expect(email).to.equal('jd@email.com')
                })
        )

        it('should fail on no user id', () =>
            auctionApi.retrieveUser()
                .catch(({ message }) => expect(message).to.equal('user id is not a string'))
        )

        it('should fail on empty user id', () =>
            auctionApi.retrieveUser('')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )

        it('should fail on blank user id', () =>
            auctionApi.retrieveUser('     ')
                .catch(({ message }) => expect(message).to.equal('user id is empty or blank'))
        )

    })

    after(done => mongoose.connection.db.dropDatabase(() => mongoose.connection.close(done)))
})