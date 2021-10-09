module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true,
    'cypress/globals': true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'jest', 'testing-library', 'jest-dom', 'cypress'],
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      excludedFiles: 'cypress/**/*',
      extends: [
        'plugin:jest/all',
        'plugin:jest-dom/recommended',
        'plugin:testing-library/react',
      ],
    },
    {
      files: ['cypres/**/*.(spec|test).[jt]s'],
      extends: ['plugin:cypress/recommended'],
    },
  ],
  rules: {},
};
