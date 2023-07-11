const flightEvent = require('./events');
const FlightDetails = require('./system')

flightEvent.on('new-flight', (payload) => {
    setTimeout(() => {
        payload.event = 'took-off'
        flightEvent.emit('took-off', payload)
        console.log(`Pilot: plane of flight id ${payload.flightID} has taken off`)
        FlightDetails(payload)
    }, 4000)

    setTimeout(() => {
        payload.event = 'Arrived'
        console.log(`Pilot: plane of flight id ${payload.flightID} arrived`)
        flightEvent.emit('Arrived', payload)
    }, 7000)
})