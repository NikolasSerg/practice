import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";

export default [
    js.configs.recommended,
    {
        ignores: ["dist", "node_modules", "eslint.config.js"],
        files: ["**/*.ts"],
        plugins: {
            "@typescript-eslint": tseslint,
            prettier: prettierPlugin,
        },
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2020,
            },
            parser: tsParser,
            parserOptions: {
                project: ["tsconfig.json"],
            },
        },
        rules: {
            ...tseslint.configs.recommended.rules, // ✅ Правильний спосіб підключення `recommended`
            ...prettierPlugin.configs.recommended.rules, // ✅ Підключення Prettier
            ...eslintConfigPrettier.rules, // ✅ Вимикає конфліктуючі ESLint-правила
            "prefer-const": "error",
            "max-params": ["error", 3],
        },
    },
];
