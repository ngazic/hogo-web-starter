module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
    },
  },
  extends: ['airbnb-base'],
  rules: {
    'class-methods-use-this': 0,
    'max-len': 0,
    'no-shadow': [
      'error',
      {
        hoist: 'functions',
        allow: [
          'resolve',
          'reject',
          'done',
          'next',
          'error',
        ],
      },
    ],
  },
};
