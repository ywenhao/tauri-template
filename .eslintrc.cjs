const { defineConfig } = require('eslint-define-config')

/* eslint-env node */
// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = defineConfig([
  {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'prettier',
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      './.eslintrc-auto-import.json',
      'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: ['react', 'react-hooks', 'unused-imports', '@typescript-eslint', 'simple-import-sort'],
    rules: {
      // indent: ['error', 'spaces'],
      // '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/consistent-type-imports': 'error',
      'react/jsx-no-undef': 'off',
      'react/no-unknown-property': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
])
