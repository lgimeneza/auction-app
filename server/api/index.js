'use strict'

require('dotenv').config()

const { mongoose } = require('data')
const express = require('express')
const router = require('./routes')
const cors = require('cors')

const { env: { PORT, DB_URL } } = process

mongoose.connect(DB_URL)
    .then(() => {
        const port = PORT || 5000

        const app = express()
        const http = require('http').Server(app)
        const io = require('socket.io')(http)

        app.use(cors())
        
        app.use('/api', router)

        app.io = io


        io.on('connection', function(socket){
            console.log('connection')

            socket.on('disconnect', function(){
              console.log('disconnected');
            });
        });

        http.listen(port, () => console.log(`server running on port ${port} with db${DB_URL}`))

        process.on('SIGINT', () => {
            console.log('\nstopping server')

            mongoose.connection.close(() => {
                console.log('db connection closed')

                process.exit()
            })
        })
    })
    .catch(console.error)