import { CreateProjectScreen } from './CreateProjectScreen'
import { renderRouter, screen } from 'expo-router/testing-library'

describe('CreateProjectScreen', () => {
	it('renders component', () => {
		renderRouter(
			{
				'/(tabs)/create-project': CreateProjectScreen
			},
			{
				initialUrl: '/(tabs)/create-project'
			}
		)
		expect(screen.getByText('Create project screen')).toBeOnTheScreen()
	})
})
