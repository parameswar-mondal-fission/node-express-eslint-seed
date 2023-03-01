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
    'require-atomic-updates': [
      'off'
    ],
    'arrow-body-style': 0,
    'prefer-arrow-callback': 0,
    'comma-dangle': ['error', 'never'],
    'prefer-const': 'error',
    'no-var': 'error',
    'no-case-declarations': 'off',
    'no-useless-escape': 'error',
    'space-before-blocks': 'error',
    'no-else-return': 'error',
    'spaced-comment': 'warn',
    'keyword-spacing': 'warn',
    'no-multiple-empty-lines': 'error',
    'comma-style': 'warn',
    'array-bracket-spacing': 'error',
    'block-spacing': 'error',
    'comma-spacing': 'error',
    'no-duplicate-imports': 'error'
  }
};
