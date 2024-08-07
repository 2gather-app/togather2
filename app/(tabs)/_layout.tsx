import { Colors } from '@constants'
import { Tabs } from 'expo-router'

export default function TabsLayout() {
	// const iconColor = (focused: boolean) => (focused ? Colors.Accent : '#000')

	return (
		<Tabs
			screenOptions={{
				headerShown: false
			}}
		>
			<Tabs.Screen
				name="Home"
				options={{
					tabBarActiveTintColor: Colors.Accent
				}}
			/>
			<Tabs.Screen
				name="News"
				options={{
					tabBarActiveTintColor: Colors.Accent
				}}
			/>
			<Tabs.Screen
				name="CreateProject"
				options={{
					tabBarActiveTintColor: Colors.Accent,
					tabBarLabel: 'Add'
				}}
			/>
			<Tabs.Screen
				name="Messages"
				options={{
					tabBarActiveTintColor: Colors.Accent
				}}
			/>
			<Tabs.Screen
				name="Profile"
				options={{
					tabBarActiveTintColor: Colors.Accent
				}}
			/>
		</Tabs>
	)
}
