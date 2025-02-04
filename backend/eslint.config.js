import prettier from 'prettier'

export default [
    {
        env: {
            node: true,
            es2021: true
        },
        files: ["src/**/*.ts"],
        extends: [
            "eslint:recommended",
            "plugin:node/recommended",
            "plugin:prettier/recommended"
        ],
        plugins: {
            prettier 
        },
        rules: {
            "prettier/prettier": "error",
            "no-unused-vars": "warn",
            "no-console": "off",
            "node/no-unsupported-features/es-syntax": "off",
            "node/no-missing-import": "off"
        }
    }
] 