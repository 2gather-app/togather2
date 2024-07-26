import { Colors } from '@constants'
import { CircleUser, Home, MessageSquare, Newspaper, PlusCircle } from '@tamagui/lucide-icons'
import { Tabs } from 'expo-router'

export default function TabsLayout() {
	const iconColor = (focused: boolean) => (focused ? Colors.Accent : '#000')

	return (
		<Tabs
			screenOptions={{
				headerShown: false
			}}
		>
			<Tabs.Screen
				name="Home"
				options={{
					tabBarIcon: ({ focused }) => (
						<Home
							size={20}
							color={iconColor(focused)}
						/>
					),
					tabBarActiveTintColor: Colors.Accent
				}}
			/>
			<Tabs.Screen
				name="News"
				options={{
					tabBarIcon: ({ focused }) => (
						<Newspaper
							size={20}
							color={iconColor(focused)}
						/>
					),
					tabBarActiveTintColor: Colors.Accent
				}}
			/>
			<Tabs.Screen
				name="CreateProject"
				options={{
					tabBarIcon: ({ focused }) => (
						<PlusCircle
							size={20}
							color={iconColor(focused)}
						/>
					),
					tabBarActiveTintColor: Colors.Accent,
					tabBarLabel: 'Add'
				}}
			/>
			<Tabs.Screen
				name="Messages"
				options={{
					tabBarIcon: ({ focused }) => (
						<MessageSquare
							size={20}
							color={iconColor(focused)}
						/>
					),
					tabBarActiveTintColor: Colors.Accent
				}}
			/>
			<Tabs.Screen
				name="Profile"
				options={{
					tabBarIcon: ({ focused }) => (
						<CircleUser
							size={20}
							color={iconColor(focused)}
						/>
					),
					tabBarActiveTintColor: Colors.Accent
				}}
			/>
		</Tabs>
	)
}
