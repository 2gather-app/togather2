import { HomeScreen } from './HomeScreen'
import { renderRouter, screen } from 'expo-router/testing-library'

describe('HomeScreen', () => {
	it('renders component', () => {
		renderRouter(
			{
				'/(tabs)/home': HomeScreen
			},
			{
				initialUrl: '/(tabs)/home'
			}
		)
		expect(screen.getByText('Home screen')).toBeOnTheScreen()
	})
})
