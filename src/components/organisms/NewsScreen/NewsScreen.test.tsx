import { NewsScreen } from './NewsScreen'
import { renderRouter, screen } from 'expo-router/testing-library'

describe('NewsScreen', () => {
	it('renders component', () => {
		renderRouter(
			{
				'/(tabs)/news': NewsScreen
			},
			{
				initialUrl: '/(tabs)/news'
			}
		)
		expect(screen.getByText('News screen')).toBeOnTheScreen()
	})
})
