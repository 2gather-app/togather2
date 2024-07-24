import { config } from '@tamagui/config/v3'
import { createFont, createTamagui } from 'tamagui'

const InstrumentSans = createFont({
	family: 'InstrumentSans',
	size: {
		1: 14,
		2: 16,
		3: 18,
		4: 22,
		5: 28,
		6: 32
	},
	weight: {
		3: '300',
		4: '400',
		5: '500',
		6: '600',
		7: '700'
	},
	face: {
		300: { normal: 'InstrumentSansLight' },
		400: { normal: 'InstrumentSansRegular' },
		500: { normal: 'InstrumentSansMedium' },
		600: { normal: 'InstrumentSansSemiBold', italic: 'InstrumentSansSemiBoldItalic' },
		700: { normal: 'InstrumentSansBold', italic: 'InstrumentSansBoldItalic' }
	}
})

export const tamaguiConfig = createTamagui({
	...config,
	fonts: {
		body: InstrumentSans,
		heading: InstrumentSans
	}
})
export default tamaguiConfig
export type Conf = typeof tamaguiConfig
declare module 'tamagui' {
	interface TamaguiCustomConfig extends Conf {}
}
