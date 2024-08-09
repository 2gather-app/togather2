import { Text, View } from 'react-native'
import { Stack } from 'expo-router'

export function NewsScreen() {
	return (
		<View>
			<Stack.Screen options={{ title: 'News' }} />
			<Text>News screen</Text>
		</View>
	)
}
