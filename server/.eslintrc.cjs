module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: "eslint:recommended",
  overrides: [
    {
      files: [".eslintrc.{js,cjs}"],
      env: {
        node: true,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {},
};
