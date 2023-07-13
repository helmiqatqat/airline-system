const flightEvent = require('./events');

flightEvent.on('new-flight-pilot', (payload) => {
    setTimeout(() => {
        payload.event = 'took-off'
        console.log(`Pilot: plane of flight id ${payload.flightID} has taken off`)
        flightEvent.emit('took-off-manager', payload)
        flightEvent.emit('took-off-system', payload)
    }, 4000)

    setTimeout(() => {
        payload.event = 'Arrived'
        console.log(`Pilot: plane of flight id ${payload.flightID} arrived`)
        flightEvent.emit('arrived-system', payload)
        flightEvent.emit('arrived-manager', payload)
    }, 7000)
})