import { Text, View } from 'react-native'
import { Stack, useLocalSearchParams } from 'expo-router'

export function ProfileScreen() {
	const { userId } = useLocalSearchParams<{ userId: string }>()

	return (
		<View>
			<Stack.Screen options={{ title: `User ${userId}` }} />
			<Text>Profile screen</Text>
			{userId && <Text>User id: ${userId}</Text>}
		</View>
	)
}
