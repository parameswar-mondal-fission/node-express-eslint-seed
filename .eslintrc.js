module.exports = {
  env: {
    'node': true,
    'commonjs': true,
    'es2021': true,
    'es6': true,
    'mocha': true
  },
  extends: 'eslint:recommended',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'no-console': [
      0
    ],
    'no-unused-vars': [
      1
    ],
    'prefer-const': 'error',
    'no-var': 'error',
  },
};
