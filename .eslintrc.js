module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint'],
	env: {
		es2020: true,
		node: true,
		jest: true
	},
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:jest/recommended',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended'
	]
}
