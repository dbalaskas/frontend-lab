// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat';

export default createConfigForNuxt(
  {
    features: {
      typescript: true,
      tooling: {
        regexp: true
      },
      stylistic: {
        indent: 2,
        quotes: 'single',
        braceStyle: '1tbs',
        arrowParens: true,
        commaDangle: 'never',
        quoteProps: 'as-needed',
        semi: true
      }
    }
  },
  [
    {
      files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
      rules: {
        'no-console': 'error', // Disallow `console.log`
        '@typescript-eslint/no-explicit-any': 'off' // Allow `any` type
      }
    }
  ]
);
