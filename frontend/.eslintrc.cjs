/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-typescript/recommended', '@vue/eslint-config-prettier'],
  env: {
    'vue/setup-compiler-macros': true
  },

  // テンプレート側設定
  //=====================
  parserOptions: {
    ecmaVersion: 2020,
    // JSXを使うなら加筆。
    ecmaFeatures: {
      jsx: true
    }
  },
  //=====================

  rules: {
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'javascript.validate.enable': 0,
    // テンプレート側設定
    //=====================
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    //=====================
  },
  // テンプレート側設定
  //=====================
  // `'google' is not defined.eslintno-undef`を抑制する
  overrides: [
    {
      files: ['*.ts', '*.vue'],
      rules: {
        'no-undef': 'off'
      }
    }
  ]
  //=====================
};
