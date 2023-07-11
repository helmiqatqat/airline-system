const flightEvent = require('./events');
const { faker } = require('@faker-js/faker')
const FlightDetails = require('./system')
require('./pilot')


const newFlight = () => {
    const payload = {
        event: 'new-flight',
        airline: 'Royal Jordanian Airlines',
        flightID: faker.string.uuid(),
        pilot: faker.internet.userName(),
        destination: faker.location.country()
    }
    console.log(`Manager: flight with id of ${payload.flightID}, has been scheduled`)
    flightEvent.emit('new-flight', payload)
    FlightDetails(payload)
}

setInterval(newFlight, 10000)

flightEvent.on('Arrived', (payload) => {
    FlightDetails(payload)
    console.log(`Manager: Well done pilot ${payload.pilot}`)
})
