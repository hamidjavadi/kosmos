import globals from 'globals';

import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';

import js from '@eslint/js';

export default defineConfig([
  globalIgnores(['src/public/**/*']),
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    extends: ['js/recommended'],
    ignores: ['src/public/**/*'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: { globals: globals.browser },
    ignores: ['src/public/**/*'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    plugins: { js },
    extends: ['js/recommended'],
    ignores: ['src/public/**/*'],
    rules: {
      'no-undef': 'error',
      'no-unused-vars': 'error',
      'no-use-before-define': 'error',
      'no-console': 'error',
    },
  },
  tseslint.configs.recommended,
]);
