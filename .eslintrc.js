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
  settings: {
    react: {
      version: '16.4'
    }
  },
  rules: {
    'no-console': 1,
    // I don't believe in default exports anymore
    'import/default': 0
  },
  overrides: [
    {
      files: ['**/__tests__/**'],
      env: {
        jest: true
      }
    }
  ]
};
