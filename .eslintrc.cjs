module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}', '*.vue'],
      rules: {
        indent: 'off',
        'max-len': 'off',
      },
      parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    indent: [2, 2, {SwitchCase: 1}],
    'vue/html-indent': [2, 2, {baseIndent: 1}],
    'vue/script-indent': [2, 2, {baseIndent: 1}],
    'vue/max-attributes-per-line': [2, {singleline: {max: 1}, multiline: {max: 1}}],
    'vue/html-self-closing': [
      2,
      {
        html: {void: 'always', normal: 'always', component: 'always'},
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/component-name-in-template-casing': [2, 'kebab-case', {registeredComponentsOnly: false}],
    'vue/no-dupe-keys': [2],
    semi: [2, 'always'],
    'comma-dangle': [2, 'always-multiline'],
    'keyword-spacing': ['error', {before: true, after: true}],
    'max-len': [2, {code: 120, comments: 300}],
    'vue/max-len': [
      2,
      {
        code: 120,
        template: 120,
        ignoreComments: true,
      },
    ],
    'object-curly-newline': [2, {ObjectExpression: {multiline: true, consistent: true}, ObjectPattern: 'never'}],
    'object-curly-spacing': [2, 'never'],
    'array-bracket-spacing': [2, 'never'],
    'computed-property-spacing': [2, 'never'],
    'block-spacing': [2, 'never'],
    'space-in-parens': [2, 'never'],
  },
};
