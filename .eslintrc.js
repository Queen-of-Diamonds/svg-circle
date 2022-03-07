module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": "warn",
    "no-debugger": "warn",
    "no-unused-vars": "warn",
    'prettier/prettier': [
      'error',
      {
        'endOfLine': "auto",
        // 'CR': false,
      }
    ],
  },
 
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};