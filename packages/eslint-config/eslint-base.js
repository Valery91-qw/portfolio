module.exports = {
  extends: [
    'next',
    'airbnb',
    'airbnb-typescript',
    'plugin:import/recommended',
    'plugin:import/typescript'
  ],

  plugins: ['@typescript-eslint', 'import'],

  parserOptions: {
    project: './tsconfig.json',
  },

  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['apps/*/tsconfig.json'],
      },
    },
  },

  rules: {
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-extraneous-dependencies': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    'jsx-a11y/label-has-associated-control': ['error', {
      'required': {
        'some': ['nesting', 'id']
      }
    }]
  },

  ignorePatterns: [
    '**/*.js',
    '**/*.json',
    'node_modules',
    'public',
    'styles',
    '.next',
    'coverage',
    'dist',
    '.turbo',
  ],
};
