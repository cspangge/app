module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'array-bracket-spacing': [2, 'always'],
    'computed-property-spacing': [2, 'always'],
    'dot-notation': [2, { 'allowKeywords': false }],
    'eol-last': 0,
    'eqeqeq': 2,
    'func-style': [2, 'declaration', { 'allowArrowFunctions': true }],
    'no-const-assign': 2,
    'no-div-regex': 1,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': 2,
    'no-extra-semi': 2,
    'no-lone-blocks': 2,
    'no-mixed-spaces-and-tabs': [2, false],
    'no-multi-spaces': 1,
    'no-multiple-empty-lines': [1, { 'max': 1 }],
    'no-spaced-func': 2,
    'no-unneeded-ternary': 2,
    'no-var': 0,
    'arrow-parens': 0,
    'arrow-spacing': 0,
    'quotes': [1, 'single'],
    'semi': [2, 'always'],
    'vue/no-use-v-if-with-v-for': ['error', {
      'allowUsingIterationVar': false
    }]
  }
}
