require('dotenv').config()
const { faker } = require('@faker-js/faker')
const io = require('socket.io-client')
const socket = io.connect(`http://localhost:${process.env.PORT}`)


const newFlight = () => {
    const payload = {
        event: 'new-flight',
        airline: 'Royal Jordanian Airlines',
        flightID: faker.string.uuid(),
        pilot: faker.internet.userName(),
        destination: faker.location.country()
    }
    socket.emit('new-flight', payload)
}

setInterval(newFlight, 10000)


socket.on('new-flight', (payload) => {
    console.log(`Manager: flight with id of ${payload.flightID}, has been scheduled`)
})

socket.on('Arrived', (payload) => {
    console.log(`Manager: Well done pilot ${payload.pilot}`)
})
