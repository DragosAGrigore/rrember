'use strict';

module.exports = {
  overrides: [
    {
      files: '*.{js,ts}',
      options: {
        singleQuote: true,
        printWidth: 80,
        proseWrap: 'always',
        tabWidth: 2,
        requireConfig: false,
        useTabs: false,
        trailingComma: 'none',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        semi: true
      }
    }
  ]
};
