/** @type {import('eslint').Linter.Config} */
module.exports = {
    env: {
      browser: true,
      es2021: true,
      jest: true
    },
    extends: [
      'eslint:recommended',
      'plugin:jest/recommended'
    ],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module'
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-unused-vars': 'warn',
      indent: ['error', 2]
    }
  };
  