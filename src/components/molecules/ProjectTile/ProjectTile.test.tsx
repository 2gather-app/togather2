import { tamaguiConfig } from '../../../../tamagui.config'
import { ProjectTile, ProjectTileProps } from './ProjectTile'
import { render, screen } from '@testing-library/react-native'
import { TamaguiProvider } from 'tamagui'

const defaultProps: ProjectTileProps = {
	title: 'title',
	subtitle: 'subtitle'
}

describe('ProjectTile', () => {
	it('renders title', () => {
		const title = 'Title'
		render(
			<TamaguiProvider config={tamaguiConfig}>
				<ProjectTile
					{...defaultProps}
					title={title}
				/>
			</TamaguiProvider>
		)
		expect(screen.getByText(title)).toBeOnTheScreen()
	})

	it('renders subtitle', () => {
		const subtitle = 'Subtitle'
		render(
			<TamaguiProvider config={tamaguiConfig}>
				<ProjectTile
					{...defaultProps}
					subtitle={subtitle}
				/>
			</TamaguiProvider>
		)
		expect(screen.getByText(subtitle)).toBeOnTheScreen()
	})

	it('renders settings icon button', () => {
		render(
			<TamaguiProvider config={tamaguiConfig}>
				<ProjectTile {...defaultProps} />
			</TamaguiProvider>
		)
		expect(screen.getByTestId('ProjectTile-settingsIconButton')).toBeOnTheScreen()
	})
})
