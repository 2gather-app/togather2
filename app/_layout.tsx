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
		InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
		InstrumentSansRegular: require('@assets/fonts/InstrumentSans/static/InstrumentSans-Regular.ttf'),
		InstrumentSansBold: require('@assets/fonts/InstrumentSans/static/InstrumentSans-Bold.ttf'),
		InstrumentSansBoldItalic: require('@assets/fonts/InstrumentSans/static/InstrumentSans-BoldItalic.ttf'),
		InstrumentSansItalic: require('@assets/fonts/InstrumentSans/static/InstrumentSans-Italic.ttf'),
		InstrumentSansMedium: require('@assets/fonts/InstrumentSans/static/InstrumentSans-Medium.ttf'),
		InstrumentSansMediumItalic: require('@assets/fonts/InstrumentSans/static/InstrumentSans-MediumItalic.ttf'),
		InstrumentSansSemiBold: require('@assets/fonts/InstrumentSans/static/InstrumentSans-SemiBold.ttf'),
		InstrumentSansSemiBoldItalic: require('@assets/fonts/InstrumentSans/static/InstrumentSans-SemiBoldItalic.ttf')
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
