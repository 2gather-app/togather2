import { Text, View } from 'react-native'
import { Stack } from 'expo-router'

export default function News() {
	return (
		<View>
			<Stack.Screen options={{ title: 'News' }} />
			<Text>Explore</Text>
		</View>
	)
}
