module.exports = {
    env: {
        node: true,
        browser: true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    rules: {
        "no-var": 2,
        "global-require": 3
    },
    extends: ["eslint:recommended"]
}