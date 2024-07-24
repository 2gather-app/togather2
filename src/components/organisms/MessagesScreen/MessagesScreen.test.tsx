import { MessagesScreen } from './MessagesScreen'
import { renderRouter, screen } from 'expo-router/testing-library'

describe('MessagesScreen', () => {
	it('renders component', () => {
		renderRouter(
			{
				'/(tabs)/messages': MessagesScreen
			},
			{
				initialUrl: '/(tabs)/messages'
			}
		)
		expect(screen.getByText('Messages screen')).toBeOnTheScreen()
	})
})
