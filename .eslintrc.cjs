/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'eslint-config-prettier',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/typescript'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier', 'import'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index'], 'unknown'],
        alphabetize: { order: 'asc' },
        pathGroups: [
          {
            pattern: 'styles/**',
            group: 'internal',
            position: 'after'
          },
          { group: 'builtin', pattern: 'react', position: 'before' }
        ],
        pathGroupsExcludedImportTypes: ['builtin']
      }
    ],
    'import/no-unresolved': 'off'
  },
  ignorePatterns: ['vite.config.ts']
}
