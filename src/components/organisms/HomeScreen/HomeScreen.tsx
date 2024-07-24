import { Text, View } from 'react-native'
import { Stack } from 'expo-router'

export function HomeScreen() {
	return (
		<View>
			<Stack.Screen options={{ title: 'Home' }} />
			<Text>Home screen</Text>
		</View>
	)
}
