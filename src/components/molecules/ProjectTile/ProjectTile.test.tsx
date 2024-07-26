import { ProjectTile, ProjectTileProps } from './ProjectTile'
import { render, screen } from '@helpers'

const defaultProps: ProjectTileProps = {
	title: 'title',
	subtitle: 'subtitle'
}

describe('ProjectTile', () => {
	it.only('renders title', () => {
		const title = 'Title'
		render(
			<ProjectTile
				{...defaultProps}
				title={title}
			/>
		)
		expect(screen.getByText(title)).toBeOnTheScreen()
	})

	it('renders subtitle', () => {
		const subtitle = 'Subtitle'
		render(
			<ProjectTile
				{...defaultProps}
				subtitle={subtitle}
			/>
		)
		expect(screen.getByText(subtitle)).toBeOnTheScreen()
	})

	it('renders settings icon button', () => {
		render(<ProjectTile {...defaultProps} />)
		expect(screen.getByTestId('ProjectTile-settingsIconButton')).toBeOnTheScreen()
	})
})
