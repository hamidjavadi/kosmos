import globals from 'globals';

import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

import js from '@eslint/js';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    plugins: { js },
    extends: ['js/recommended'],
    rules: {
      'no-undef': 'error',
      'no-unused-vars': 'error',
      'no-use-before-define': 'error',
      'no-console': 'error',
    },
  },
  tseslint.configs.recommended,
]);
