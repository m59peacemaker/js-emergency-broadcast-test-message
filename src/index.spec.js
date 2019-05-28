const { test } = require('zora')
const EBSTestMessage = require('./')

test('original message default', t => {
	const expected = `This is a test of the Emergency Broadcast System. The broadcasters of your area in voluntary cooperation with the Federal, State, and local authorities have developed this system to keep you informed in the event of an emergency. If this had been an actual emergency, the Attention Signal you just heard would have been followed by official information, news or instructions. This station serves the local area. This concludes this test of the Emergency Broadcast System.`
	t.equal(EBSTestMessage(), expected, expected)
})

test('original message with eventExamples', t => {
	const expected = `This is a test of the Emergency Broadcast System. The broadcasters of your area in voluntary cooperation with the Federal, State, and local authorities have developed this system to keep you informed in the event of an emergency. If this had been an actual emergency, such as raining cats and dogs, real terrible stuff, or just can't even, the Wretched Awful Sound you just heard would have been followed by official information, news or instructions. This station serves the local area. This concludes this test of the Emergency Broadcast System.`
	t.equal(
		EBSTestMessage({
			signalName: 'Wretched Awful Sound',
			eventExamples: [
				'raining cats and dogs',
				'real terrible stuff',
				`just can't even`
			]
		}),
		expected,
		expected
	)
})
