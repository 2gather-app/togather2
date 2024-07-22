import { CircleEllipsis } from '@tamagui/lucide-icons'
import { Button, Text, XStack, YStack } from 'tamagui'
import { FC } from 'react'

export type ProjectTileProps = {
	title: string
	subtitle: string
}

export const ProjectTile: FC<ProjectTileProps> = ({ title, subtitle }) => {
	return (
		<XStack
			padding="$4"
			borderRadius="$6"
			height={125}
			backgroundColor="#FFF"
		>
			<YStack
				flex={1}
				justifyContent="space-between"
			>
				<Text
					fontSize={18}
					fontWeight="500"
				>
					{title}
				</Text>
				<Text
					fontSize={12}
					fontWeight="400"
				>
					{subtitle}
				</Text>
			</YStack>

			<Button
				testID="ProjectTile-settingsIconButton"
				alignSelf="center"
				width="$2.5"
				height="$2.5"
				borderRadius="$10"
				backgroundColor="$colorTransparent"
				icon={<CircleEllipsis size="$2.5" />}
			/>
		</XStack>
	)
}
