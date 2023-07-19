require('dotenv').config()
const io = require('socket.io-client')
const socket = io.connect(`http://localhost:${process.env.PORT}`)

socket.emit('get-all')

socket.on('flight', (payload) => {
    for(let flight in payload) {
        console.log(`Pilot: Sorry I did not catch this flight with ID: ${flight}`)
    }
})

socket.on('new-flight', (payload) => {
    setTimeout( () => {
        payload.event = 'took-off'
        socket.emit('took-off', payload)
    }, 4000)

    setTimeout( () => {
        payload.event = 'Arrived'
        socket.emit('Arrived', payload)
    }, 7000)
})

socket.on('took-off', (payload) => {
    console.log(`Pilot: plane of flight id ${payload.flightID} has taken off`)
})

socket.on('Arrived', (payload) => {
    console.log(`Pilot: plane of flight id ${payload.flightID} arrived`)
})