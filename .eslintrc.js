module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  extends : [ 'eslint:recommended', 'plugin:react/recommended' ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 8,
    sourceType: 'module'
  },
  plugins: [ 'react', 'import', 'react-hooks' ],
  ignorePatterns: [ 'node_modules/' ],
  settings: {
    react: {
      version: 'detect' // "detect" automatically picks the version you have installed.
    }
  },
  rules: {
    'semi': [ 'error', 'never' ],
    'quotes': [ 'error', 'single' ],
    'indent': [ 'error', 2 ],
    'object-curly-spacing': [ 'error', 'always' ],
    'computed-property-spacing': [ 'error', 'always' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'comma-dangle': [ 'error', 'never' ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [ 1, { 'extensions': [ '.js', '.jsx' ] } ],
    'react/prop-types': 'warn',
    'no-console': process.env.NODE_ENV === 'prod' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'prod' ? 'warn' : 'off',
    'no-multiple-empty-lines': [ 'error', { 'max': 1 } ],
    'no-unused-vars': 1,  //  0 = off, 1 = warn, 2 = error
    'react/no-array-index-key': 0,
    'react/jsx-one-expression-per-line': 0
  }
}
