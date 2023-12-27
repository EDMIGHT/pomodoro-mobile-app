module.exports = {
  singleQuote: true,
  tabWidth: 2,
  jsxSingleQuote: true,
  arrowParens: 'always',
  useTabs: false,
  printWidth: 95,
  trailingComma: 'es5',
  semi: true,
  endOfLine: 'auto',

  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^@/components/(.*)$',
    '^@/hooks/(.*)$',
    '^@/services/(.*)$',
    '^@/assets/(.*)$',
    '^@/providers/(.*)$',
    '^@/types/(.*)$',
    '^../(.*)$',
    '^./(.*)$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};