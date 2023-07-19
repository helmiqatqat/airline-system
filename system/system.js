require('dotenv').config()
const { faker } = require('@faker-js/faker')
const FlightDetails = require('../logger')
const io = require('socket.io')(process.env.PORT)

let queue = {
    flights: {

    }
}

io.on('connection', (socket) => {
    console.log(`User with id ${socket.id} connected`)
    socket.on('new-flight', (payload) => {
        io.emit('new-flight', payload)
        queue.flights[faker.string.uuid()] = FlightDetails(payload)
        console.log('queue: ', queue)
    })
    socket.on('took-off', (payload) => {
        io.emit('took-off', payload)
        console.log('queue: ', queue)
    })
    socket.on('Arrived', (payload) => {
        io.emit('Arrived', payload)
        console.log('queue: ', queue)
    })
    socket.on('get-all', (socket) => {
        io.emit('flight', queue.flights)
        for(let flight in queue.flights) {
            delete queue.flights[flight]
        }
    })
})







