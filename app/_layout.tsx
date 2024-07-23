import { tamaguiConfig } from '../tamagui.config'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { TamaguiProvider } from 'tamagui'
import { useColorScheme } from 'react-native'
import { Stack } from 'expo-router'

export default function TabsLayout() {
	const colorScheme = useColorScheme()
	const [loaded] = useFonts({
		Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
		InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf')
	})

	if (!loaded) return null

	return (
		<TamaguiProvider
			config={tamaguiConfig}
			defaultTheme={colorScheme!}
		>
			<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
				<Stack screenOptions={{ headerShown: false }}>
					<Stack.Screen
						name="(tabs)"
						options={{ headerShown: false }}
					/>
				</Stack>
			</ThemeProvider>
		</TamaguiProvider>
	)
}
