module.exports = {
    root: true,
    env: {
        node: true,
        'vue/setup-compiler-macros': true
    },
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020,
        // JSXを使うなら加筆。
        "ecmaFeatures": {
            "jsx": true
        }
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    },
    // `'google' is not defined.eslintno-undef`を抑制する
    "overrides": [
        {
            "files": ["*.ts", "*.vue"],
            "rules": {
                "no-undef": "off"
            }
        }
    ]
}