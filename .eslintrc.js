module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'standard',
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    // 'plugin:vue/essential',
    'plugin:vue/recommended'
  ],
  plugins: ['vue'],
  rules: {
    'no-multi-spaces': 'off',
    'no-undef': 'warn',
    indent: 'warn'
  }
}
