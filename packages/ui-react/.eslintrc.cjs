/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  ignorePatterns: ['.eslintrc.cjs'],
  extends: ['@repo/eslint-config-react/index.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true
  }
};
