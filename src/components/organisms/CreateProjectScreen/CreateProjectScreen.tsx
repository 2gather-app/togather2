import { Text, View } from 'react-native'
import { Stack } from 'expo-router'

export function CreateProjectScreen() {
	return (
		<View>
			<Stack.Screen options={{ headerShown: true, title: 'Create Event' }} />
			<Text>Fookin CreateEvent page innit</Text>
		</View>
	)
}
