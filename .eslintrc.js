module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  extends: ['airbnb-base', 'plugin:jest/recommended', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  rules: {
    'no-console': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-use-before-define': 'off'
  }
};
