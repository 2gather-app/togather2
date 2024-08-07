/* eslint-env node */
const { getDefaultConfig } = require('expo/metro-config')

module.exports = (() => {
	/** @type {import('expo/metro-config').MetroConfig} */
	const config = getDefaultConfig(__dirname, {
		// [Web-only]: Enables CSS support in Metro.
		isCSSEnabled: true
	})

	const { withTamagui } = require('@tamagui/metro-plugin')
	module.exports = withTamagui(config, {
		components: ['tamagui'],
		config: './tamagui.config.ts',
		outputCSS: './tamagui-web.css'
	})

	const { transformer, resolver } = config

	config.transformer = {
		...transformer,
		babelTransformerPath: require.resolve('react-native-svg-transformer')
	}
	config.resolver = {
		...resolver,
		assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
		sourceExts: [...resolver.sourceExts, 'svg']
	}

	return config
})()
