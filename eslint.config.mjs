// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat';

export default createConfigForNuxt(
  {
    features: {
      typescript: true,
      tooling: {
        regexp: true
      }
    }
  },
  [{
    ignores: ['./types/generated.d.ts'],
    rules: {
      // Code style
  
      'no-console': 'error', // Disallow the use of console
      '@typescript-eslint/no-explicit-any': 'off', // Disallow usage of the 'any' type
      'no-unused-vars': ['error', {
        vars: 'all', // Check all variables in all scopes (global and local)
        args: 'after-used', // Check function arguments, but only after the last used argument
        argsIgnorePattern: '^_', // Ignore unused args starting with '_'
        destructuredArrayIgnorePattern: '^_', // Ignore unused destructured properties starting with '_'
        varsIgnorePattern: '^_', // Ignore unused variables starting with '_'
        ignoreRestSiblings: false // Do not ignore unused rest siblings in destructuring
      }],
      'max-len': ['warn', { code: 120, ignoreUrls: true }], // Enforce a maximum line length of 120 characters
      'consistent-return': 'error', // Require consistent return statements in functions
      'no-multiple-empty-lines': ['error', { max: 1 }],

      indent: ['error', 2], // Enforce 2 spaces for indentation
      semi: ['error', 'always'], // Require semicolons at the end of statements
      quotes: ['error', 'single', { avoidEscape: true }], // Use single quotes, allow escaping
      'comma-dangle': ['error', 'never'], // Disallow trailing commas
      'arrow-parens': ['error', 'always'], // Require parentheses around arrow function arguments
      'brace-style': ['error', '1tbs', { allowSingleLine: true }], // Enforce "one true brace style"
      'object-curly-spacing': ['error', 'always'], // Require spacing inside curly braces
      'comma-spacing': ['error', { before: false, after: true }], // Enforce space after commas
      'eol-last': ['error', 'always'], // Require a newline at the end of files
      'space-before-function-paren': ['error', {
        anonymous: 'always', // Space before anonymous functions
        named: 'always', // No space before named functions
        asyncArrow: 'always' // Space before async arrow functions
      }],

      // Vue style

      'vue/no-v-html': 'error' // Disallow use of v-html to prevent XSS

    }
  }]
);
