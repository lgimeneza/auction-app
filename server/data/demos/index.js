'use strict'

require('dotenv').config()

const { Address, Bid, Category, Product, User } = require('../models')
const { mongoose } = require('../../data')

const { env: { DB_URL } } = process

mongoose.connect(DB_URL)
    .then(() => mongoose.connection.db.dropDatabase())
    .then( async () => {

        const image01 = 'https://firebasestorage.googleapis.com/v0/b/auction-app-da584.appspot.com/o/product01.png?alt=media&token=98d69ce5-7c4c-4665-811f-b4a2bf15e150' // Macbook 13
        const image02 = 'https://firebasestorage.googleapis.com/v0/b/auction-app-da584.appspot.com/o/product02.png?alt=media&token=9e150846-2e6f-4044-b7b6-8d9deae8f2b5' // Headphones 01
        const image03 = 'https://firebasestorage.googleapis.com/v0/b/auction-app-da584.appspot.com/o/product03.png?alt=media&token=04626576-c54d-46e6-b8f2-7a715274dc7c' // Macbook 15
        const image04 = 'https://firebasestorage.googleapis.com/v0/b/auction-app-da584.appspot.com/o/product04.png?alt=media&token=bb40c808-2a85-4d79-951a-2f5e54dc72bd' // Tablet
        const image05 = 'https://firebasestorage.googleapis.com/v0/b/auction-app-da584.appspot.com/o/product05.png?alt=media&token=a9db12c0-4363-4a8c-b407-1899cf9b612c' // Headphones 02
        const image06 = 'https://firebasestorage.googleapis.com/v0/b/auction-app-da584.appspot.com/o/product06.png?alt=media&token=820896ce-f746-4402-9300-6869de770ce3' // Laptop 01
        const image07 = 'https://firebasestorage.googleapis.com/v0/b/auction-app-da584.appspot.com/o/product07.png?alt=media&token=95ff2f17-4f93-4c9f-9874-802518f5f457' // Smartphone
        const image08 = 'https://firebasestorage.googleapis.com/v0/b/auction-app-da584.appspot.com/o/product08.png?alt=media&token=95fb92ce-b4dc-4c5d-ad13-0f17b24392f1' // Laptop 02
        const image09 = 'https://firebasestorage.googleapis.com/v0/b/auction-app-da584.appspot.com/o/product09.png?alt=media&token=4d12bf7a-75aa-495e-bc59-1d60c52a04ee' // Camera


        const category01 = new Category({ name: 'Laptops' })
        const category02 = new Category({ name: 'Smartphones' })
        const category03 = new Category({ name: 'Cameras' })
        const category04 = new Category({ name: 'Accesories' })
        

        const address01 = new Address({ line1: 'carrer major nº1', line2: 'baixos 3a', city: 'barcelona',  province: 'barcelona', postcode: '08770', country: 'Spain' })
        const address02 = new Address({ line1: 'carrer major nº1', line2: 'baixos 3a', city: 'barcelona',  province: 'barcelona', postcode: '08770', country: 'Spain' })
        const address03 = new Address({ line1: 'carrer major nº1', line2: 'baixos 3a', city: 'barcelona',  province: 'barcelona', postcode: '08770', country: 'Spain' })
        const address04 = new Address({ line1: 'carrer major nº1', line2: 'baixos 3a', city: 'barcelona',  province: 'barcelona', postcode: '08770', country: 'Spain' })
        const address05 = new Address({ line1: 'carrer major nº1', line2: 'baixos 3a', city: 'barcelona',  province: 'barcelona', postcode: '08770', country: 'Spain' })

        const user01 = new User({ email: 'jd@email.com', password: '123', name: 'John', surname: 'Doe', role: 'customer', registerDate: Date.now(), products: [], address: address01, wishes:[] })
        const user02 = new User({ email: 'email02@email.com', password: '123', name: 'Chas', surname: 'Keaveny', role: 'customer', registerDate: Date.now(), products: [], address: address02, wishes:[] })
        const user03 = new User({ email: 'email03@email.com', password: '123', name: 'Falito', surname: 'Galtone', role: 'customer', registerDate: Date.now(), products: [], address: address03, wishes:[] })
        const user04 = new User({ email: 'mikel@email.com', password: '123', name: 'Elke', surname: 'Hand', role: 'customer', registerDate: Date.now(), products: [], address: address04, wishes:[] })
        const user05 = new User({ email: 'lilam.gimenez@gmail.com', password: '123', name: 'Lilam', surname: 'Giménez', role: 'customer', registerDate: Date.now(), products: [], address: address05, wishes:[] })

        const bid01 = new Bid({ price: 120, date: Date.now(), user: user04 })
        const bid02 = new Bid({ price: 400, date: Date.now(), user: user02 })

        const bid03 = new Bid({ price: 100, date: Date.now(), user: user03 })
        const bid04 = new Bid({ price: 110, date: Date.now(), user: user02 })

        const bid05 = new Bid({ price: 160, date: Date.now(), user: user04 })
        const bid06 = new Bid({ price: 360, date: Date.now(), user: user02 })

        const bid07 = new Bid({ price: 100, date: Date.now(), user: user02 })
        const bid08 = new Bid({ price: 120, date: Date.now(), user: user03 })

        const bid09 = new Bid({ price: 50, date: Date.now(), user: user03 })
        const bid10 = new Bid({ price: 60, date: Date.now(), user: user03 })

        const bid11 = new Bid({ price: 85, date: Date.now(), user: user03 })
        const bid12 = new Bid({ price: 90, date: Date.now(), user: user03 })

        const product01 = new Product({ 
            title: 'MacBook Pro de 13 pulgadas 128GB',
            description: 'Intel Core i5 de doble núcleo a 2,3 GHz8 GB de memoria RAM128 GB flash PCIeIntel Iris Plus Graphics 640',
            startDate: '2018-05-23T18:25:43.511Z',
            endDate: '2018-08-23T18:20:16.511Z',
            startPrice: 100,
            currentPrice: 400,
            currentUser: user05,
            currentBid: bid02,
            closed: false,
            images: [image01, image03, image06, image08],
            category: category01,
            winningBid: null,
            winningUser: null,
            bids: [bid01, bid02]
        })

        const product02 = new Product({ 
            title: 'Beats Solo3 Wireless On-Ear Auriculares',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit semper euismod, commodo urna dis ante erat sem aliquet aenean, tempor nulla non mauris a curabitur molestie metus. Sodales odio porttitor interdum sed iaculis luctus auctor tincidunt, et nunc tortor hendrerit aliquet vel sociosqu sociis, euismod senectus per pellentesque dis egestas est.',
            startDate: '2018-06-18T19:10:10.511Z',
            endDate: '2018-08-22T20:15:05.511Z',
            startPrice: 90,
            currentPrice: 110,
            currentUser: user02,
            currentBid: bid04,
            closed: false,
            images: [image02, image05, image02, image05],
            category: category04,
            winningBid: null,
            winningUser: null,
            bids: [bid03, bid04]
        })

        const product03 = new Product({ 
            title: 'MacBook Pro de 15 pulgadas 256GB',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit semper euismod, commodo urna dis ante erat sem aliquet aenean, tempor nulla non mauris a curabitur molestie metus. Sodales odio porttitor interdum sed iaculis luctus auctor tincidunt, et nunc tortor hendrerit aliquet vel sociosqu sociis, euismod senectus per pellentesque dis egestas est.',
            startDate: '2018-06-17T11:18:12.511Z',
            endDate: '2018-08-24T13:15:12.511Z',
            startPrice: 150,
            currentPrice: 360,
            currentUser: user02,
            currentBid: bid06,
            closed: false,
            images: [image03, image01, image06, image08],
            category: category01,
            winningBid: null,
            winningUser: null,
            bids: [bid05, bid06]
        })

        const product04 = new Product({ 
            title: 'Tablet Pixel C 256GB Tab E 8 GB - 1.3 GHz',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit semper euismod, commodo urna dis ante erat sem aliquet aenean, tempor nulla non mauris a curabitur molestie metus. Sodales odio porttitor interdum sed iaculis luctus auctor tincidunt, et nunc tortor hendrerit aliquet vel sociosqu sociis, euismod senectus per pellentesque dis egestas est.',
            startDate: '2018-04-10T11:18:12.511Z',
            endDate: '2018-08-23T14:20:12.511Z',
            startPrice: 90,
            currentPrice: 120,
            currentUser: user02,
            currentBid: bid06,
            closed: false,
            images: [image04, image07, image04, image07],
            category: category04,
            winningBid: null,
            winningUser: null,
            bids: [bid07, bid08]
        })

        const product05 = new Product({ 
            title: 'Xgody Android 5.5" Smartphone 3g Quad Core',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit semper euismod, commodo urna dis ante erat sem aliquet aenean, tempor nulla non mauris a curabitur molestie metus. Sodales odio porttitor interdum sed iaculis luctus auctor tincidunt, et nunc tortor hendrerit aliquet vel sociosqu sociis, euismod senectus per pellentesque dis egestas est.',
            startDate: '2018-04-10T11:18:12.511Z',
            endDate: '2018-06-20T18:20:10.511Z',
            startPrice: 40,
            currentPrice: 60,
            currentUser: user02,
            currentBid: bid06,
            closed: false,
            images: [image07, image09, image07, image09],
            category: category02,
            winningBid: null,
            winningUser: null,
            bids: [bid09, bid10]
        })

        const product06 = new Product({ 
            title: '0lympus E-PL8 Cuerpo con Objetivo 14-42mm EZ',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit semper euismod, commodo urna dis ante erat sem aliquet aenean, tempor nulla non mauris a curabitur molestie metus. Sodales odio porttitor interdum sed iaculis luctus auctor tincidunt, et nunc tortor hendrerit aliquet vel sociosqu sociis, euismod senectus per pellentesque dis egestas est.',
            startDate: '2018-04-10T11:18:12.511Z',
            endDate: '2018-06-20T18:31:12.511Z',
            startPrice: 80,
            currentPrice: 90,
            currentUser: user02,
            currentBid: bid06,
            closed: false,
            images: [image09, image07, image09, image04],
            category: category03,
            winningBid: null,
            winningUser: null,
            bids: [bid11, bid12]
        })        

        await Promise.all([
            user01.save(),
            user02.save(),
            user03.save(),
            user04.save(),
            user05.save()
        ])

        await Promise.all([
            category01.save(),
            category02.save(),
            category03.save(),
            category04.save()
        ])

        await Promise.all([
            product01.save(),
            product02.save(),
            product03.save(),
            product04.save(),
            product05.save(),
            product06.save(),
        ])
        
        return true;

    })
    .then(() => console.log('done'))
    .catch(console.error)
    .then(() => mongoose.disconnect())
