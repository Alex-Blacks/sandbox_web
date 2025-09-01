import js from '@eslint/js';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  prettier,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly', // теперь ESLint понимает, что console существует
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error',
    },
  },
];
