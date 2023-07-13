const logFlightDetails = (payload) => {
    const object = {
        event: payload.event,
        time: new Date().toString(),
        Details: {
            airline: payload.airline,
            destination: payload.destination,
            pilot: payload.pilot,
            flightID: payload.flightID
        }
    }
    console.log(`Flight `, object)
}

module.exports = logFlightDetails