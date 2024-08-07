import { Colors } from '@constants'
import { StyleSheet, Text, View } from 'react-native'

type EventMetadataPanelProps = {
	date: string
	participants: number
	distance: number
}

const Divider = () => <View style={{ width: 2, height: 35, backgroundColor: Colors.PlaceholderTransparent }} />

export const EventMetadataPanel = ({ date, participants, distance }: EventMetadataPanelProps) => {
	return (
		<View style={styles.metadataRow}>
			<View style={styles.metadataItem}>
				{/* TODO: implement MobX store for event details and read date, num of participants and distance from it or pass this data as a prop */}
				<Text style={styles.metadataItemText}>{date}</Text>
			</View>
			<Divider />

			<View style={styles.metadataItem}>
				<Text style={styles.metadataItemText}>{participants}</Text>
			</View>
			<Divider />
			<View style={styles.metadataItem}>
				<Text style={styles.metadataItemText}>{distance} km</Text>
				{/* TODO: Distance should be checked and converted if necessary  */}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	metadataRow: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 5
	},
	metadataItem: {
		marginHorizontal: 30,
		alignItems: 'center'
	},
	metadataItemText: {
		marginTop: 10,
		fontWeight: '600'
	}
})
