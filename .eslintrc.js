module.exports = {
	extends: ['expo', 'prettier', 'plugin:prettier/recommended'],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		'eqeqeq': 'error',
		'no-inline-comments': 'error',
		'semi': ['off', 'never'],
		'no-console': ['error', { allow: ['warn', 'error'] }],
		'comma-dangle': ['error', 'never']
	},
	overrides: [
		{
			// Test files only
			files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
			extends: ['plugin:testing-library/react-native']
		}
	]
}
