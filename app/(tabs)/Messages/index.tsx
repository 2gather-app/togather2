import { Text, View } from 'react-native'
import { Stack } from 'expo-router'

export default function Messages() {
	return (
		<View>
			<Stack.Screen options={{ title: 'Messages' }} />
			<Text>Fookin Notifications page innit</Text>
		</View>
	)
}
