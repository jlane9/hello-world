module.exports = {
  plugins: ['@typescript-eslint'],
  extends: ['react-app', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  rules: {
    'react/jsx-filename-extension': 'off' //You can override any rules you want

  }
};