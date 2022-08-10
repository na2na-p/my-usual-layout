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
    ],
    'rules': {
			'max-len': 'off',
			'indent': 'off',
			'no-tabs': 'off',
			'new-cap': 'off',
			'react/react-in-jsx-scope': 'off',
			'react/display-name': 'off', // ファイル名とコンポーネント名を一致させることで解決させるので不要
			'spaced-comment': 'off',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					'varsIgnorePattern': '^_',
					'argsIgnorePattern': '^_',
				},
			],
		},
		'settings': {
			'react': {
				version: 'detect',
			},
    },
};
