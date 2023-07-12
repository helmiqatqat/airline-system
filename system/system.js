require('dotenv').config()
const FlightDetails = require('../logger')
const io = require('socket.io')(process.env.PORT)

io.on('connection', (socket) => {
    console.log(`User with id ${socket.id} connected`)
    socket.on('new-flight', (payload) => {
        io.emit('new-flight', payload)
        FlightDetails(payload)
    })
    socket.on('took-off', (payload) => {
        io.emit('took-off', payload)
        FlightDetails(payload)
    })
    socket.on('Arrived', (payload) => {
        io.emit('Arrived', payload)
        FlightDetails(payload)
    })
})






