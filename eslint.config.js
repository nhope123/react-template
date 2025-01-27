import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import parser from "@typescript-eslint/parser";

export default [
	{ ignores: ['dist'] },
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parser: parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        }
      },
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			react: react,
			import: importPlugin,
			'jsx-a11y': jsxA11y,
			prettier: prettier,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true },
			],
			...importPlugin.configs.recommended.rules,
			...jsxA11y.configs.recommended.rules,
			...react.configs.recommended.rules,
			'react/jsx-uses-react': 'error',
			'react/jsx-uses-vars': 'error',
			'react/react-in-jsx-scope': 'off',
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',
      "prettier/prettier": "error",
			'jsx-a11y/anchor-is-valid': [
				'warn',
				{
					aspects: ['noHref', 'invalidHref', 'preferButton'],
				},
			],
			'import/no-unresolved': 'error',
			'import/order': [
				'warn',
				{
					groups: ['builtin', 'external', 'internal'],
					'newlines-between': 'always',
				},
			],
		},
		settings: {
			react: {
				version: 'detect',
			},
			'import/resolver': {
				node: {
					extensions: ['.js', '.jsx', '.ts', '.tsx'],
				},
			},
		},
    
	}
];
