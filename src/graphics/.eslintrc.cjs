module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'es2021': true,
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
    'new-cap': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off', // ファイル名とコンポーネント名を一致させることで解決させるので不要
    'max-len': 'off',
    'no-tabs': 'off',
    'spaced-comment': 'off',
    'indent': 'off',
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
