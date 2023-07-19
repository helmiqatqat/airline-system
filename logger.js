const FlightDetails = (payload) => {
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
    return object
}

module.exports = FlightDetails