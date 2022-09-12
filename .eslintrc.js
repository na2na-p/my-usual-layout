module.exports = {
	'root': true,
    'env': {
        'browser': true,
        'es2021': true,
        'node': true,
    },
    'extends': [
        'plugin:react/recommended',
        'google',
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true,
        },
        'ecmaVersion': 'latest',
        'sourceType': 'module',
    },
    'plugins': [
        'react',
        '@typescript-eslint',
				'@emotion',
    ],
    'rules': {
			'react/no-unknown-property': [
				'error',
				{ignore: ['css']},
			],
			'max-len': 'off',
			'indent': 'off',
			'no-tabs': 'off',
			'new-cap': 'off',
			'react/react-in-jsx-scope': 'off',
			'react/display-name': 'off', // ファイル名とコンポーネント名を一致させることで解決させるので不要
			'spaced-comment': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
			'no-unused-vars': 'warn',
			'require-jsdoc': 'off',
			'@emotion/no-vanilla': 'error',
			'@emotion/import-from-emotion': 'error',
			'@emotion/styled-import': 'error',
		},
		'settings': {
			'react': {
				version: 'detect',
			},
    },
};
