import { Text, View } from 'react-native'
import { Stack } from 'expo-router'

export function MessagesScreen() {
	return (
		<View>
			<Stack.Screen options={{ title: 'Messages' }} />
			<Text>Messages screen</Text>
		</View>
	)
}
