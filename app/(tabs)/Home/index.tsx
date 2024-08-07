import { ProjectTile, UserGreetingHeader } from '@components'
import { Searchbar } from 'react-native-paper'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Link, Stack } from 'expo-router'

export default function Home() {
	const [searchQuery, setSearchQuery] = useState('')

	return (
		<View style={styles.pageContainer}>
			<Stack.Screen options={{ title: 'Home' }} />

			<View>
				<Text>You wanna test navigating with route parameters? Aight!</Text>
				<Text>Pressie pressie them links below. Come on now mate! It's bloody fun, innit! </Text>
				<Link
					href="/Profile/bobOne"
					style={{ fontWeight: '600' }}
				>
					Go to user 'bobOne'
				</Link>
				<Link
					href="/Profile/bobTwo"
					style={{ fontWeight: '600' }}
				>
					Go to user 'bobTwo'
				</Link>
			</View>
			<UserGreetingHeader />
			<Searchbar
				placeholder="Search"
				onChangeText={setSearchQuery}
				value={searchQuery}
			/>

			<ProjectTile
				title="Mobile app for furniture renovation"
				subtitle="Secondary text"
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	pageContainer: {
		margin: 20,
		flexDirection: 'column'
	}
})
