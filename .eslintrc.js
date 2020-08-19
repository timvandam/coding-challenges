module.exports = {
	env: {
		es2020: true,
		node: true,
		jest: true
	},
	extends: [
		'standard',
		'plugin:@typescript-eslint/recommended',
		'plugin:jest/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 11,
		sourceType: 'module'
	},
	plugins: [
		'@typescript-eslint'
	],
	rules: {
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'no-useless-constructor': 'off',
		'@typescript-eslint/no-useless-constructor': 'error'
	}
}
