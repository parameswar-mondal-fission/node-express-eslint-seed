module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
    es6: true,
    mocha: true
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'prettier'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'linebreak-style': [
      'error',
      'unix'
    ],
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'always'
    ],
    'no-console': [
      0
    ],
    'no-unused-vars': [
      1
    ],
    'arrow-body-style': 0,
    'prefer-arrow-callback': 0,
    'comma-dangle': ['error', 'never'],
    'prefer-const': 'error',
    'no-var': 'error'
  }
};
