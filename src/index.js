const a = require('indefinite')
const list = require('english-list')

module.exports = ({
	systemName = 'Emergency Broadcast System',
	signalName = 'Attention Signal',
	serviceProviderType = 'broadcasters',
	serviceProviderImplement = 'station',
	operationalArea = 'the local area',
	authorities = [ 'Federal', 'State', 'local' ],
	cooperationType = 'voluntary',
	eventType = 'emergency',
	eventExamples = []
} = {}) => `This is a test of the ${systemName}. The ${serviceProviderType} of your area in ${cooperationType} cooperation with the ${list('and', authorities)} authorities have developed this system to keep you informed in the event of ${a(eventType)}. If this had been an actual ${eventType}, ${eventExamples.length ? `such as ${list('or', eventExamples)}, ` : ''}the ${signalName} you just heard would have been followed by official information, news or instructions. This ${serviceProviderImplement} serves ${operationalArea}. This concludes this test of the ${systemName}.`
