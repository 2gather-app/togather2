import CreateEvent from '../../../app/(tabs)/CreateEvent'
import { renderRouter, screen } from 'expo-router/testing-library'

describe('CreateEventContent', () => {
	it('renders component', () => {
		renderRouter(
			{
				'/(tabs)/create-event': CreateEvent
			},
			{
				initialUrl: '/(tabs)/create-event'
			}
		)
		expect(screen.getByText('Fookin CreateEvent page innit')).toBeOnTheScreen()
	})
})
