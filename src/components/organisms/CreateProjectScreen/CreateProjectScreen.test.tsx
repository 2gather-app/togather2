import { CreateProjectScreen } from './CreateProjectScreen'
import { renderRouter, screen } from 'expo-router/testing-library'

describe('CreateEvent', () => {
	it('renders component', () => {
		renderRouter(
			{
				'/(tabs)/create-project': CreateProjectScreen
			},
			{
				initialUrl: '/(tabs)/create-project'
			}
		)
		expect(screen.getByText('Fookin CreateEvent page innit')).toBeOnTheScreen()
	})
})
