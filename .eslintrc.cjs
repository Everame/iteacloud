/* eslint-disable filenames-simple/naming-convention */
module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:eslint-plugin/recommended',
        'airbnb-base',
        'plugin:storybook/recommended',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    plugins: [
        'filenames-simple',
        'unused-imports',
        'import',
        'modules-newlines',
    ],
    env: {
        node: true,
    },
    rules: {
        'filenames-simple/naming-convention': ['error', { rule: 'kebab-case' }],
        'unused-imports/no-unused-imports': 'error',
        'comma-dangle': ['error', 'always-multiline'],
        indent: ['error', 2],
        'brace-style': 'error',
        semi: ['error', 'always'],
        quotes: ['error', 'single', { avoidEscape: true }],
        'object-property-newline': 'error',
        'object-curly-spacing': ['error', 'always'],
        'modules-newlines/import-declaration-newline': 'error',
        'modules-newlines/export-declaration-newline': 'error',
        'object-curly-newline': ['error'],
        'import/no-duplicates': ['error'],
        'import/order': [
            'error',
            {
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
                'newlines-between': 'never',
                pathGroupsExcludedImportTypes: ['builtin'],
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                ],
            },
        ],
        '@typescript-eslint/consistent-type-imports': [
            'error',
            {
                fixStyle: 'inline-type-imports',
            },
        ],
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        'import/no-extraneous-dependencies': 'off',
        'prefer-destructuring': 'off',
        'linebreak-style': ['error', 'unix'],
        complexity: ['error', 10],
        'import/no-unresolved': 'error',
    },
    ignorePatterns: ['dist'],
}
