const flightEvent = require('./events');
const logFlightDetails = require('./logger')

flightEvent.on('new-flight-system', (payload) => logFlightDetails(payload))
flightEvent.on('took-off-system', (payload) => logFlightDetails(payload))
flightEvent.on('arrived-system', (payload) => logFlightDetails(payload))