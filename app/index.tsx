import { Redirect } from 'expo-router'
import '../i18n'

export default function MainIndex() {
	return <Redirect href="/(tabs)/Home" />
	// return <Redirect href="/Event" />
	// return <View style={{ backgroundColor: "red", flex: 1 }}></View>;
}
