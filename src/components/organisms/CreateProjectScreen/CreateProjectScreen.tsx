import { Text, View } from 'react-native'
import { Stack } from 'expo-router'

export function CreateProjectScreen() {
	return (
		<View>
			<Stack.Screen options={{ title: 'Create Event' }} />
			<Text>Create project screen</Text>
		</View>
	)
}
