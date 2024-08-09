import { ProfileScreen } from './ProfileScreen'
import { renderRouter, screen } from 'expo-router/testing-library'

describe('ProfileScreen', () => {
	it('renders component', () => {
		renderRouter(
			{
				'/(tabs)/profile': ProfileScreen
			},
			{
				initialUrl: '/(tabs)/profile'
			}
		)
		expect(screen.getByText('Profile screen')).toBeOnTheScreen()
	})
})
