module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended'
  ],
  env: {
    'shared-node-browser': true,
    es6: true
  },
  globals: {
    fetch: true
  },
  settings: {
    react: {
      version: '16.4'
    }
  },
  rules: {
    'no-console': 1,
    // I don't believe in default exports anymore
    'import/default': 0,
    'react/jsx-key': 0
  },
  overrides: [
    {
      files: ['**/__tests__/**', '**/*.test.js'],
      env: {
        jest: true
      }
    }
  ]
};
