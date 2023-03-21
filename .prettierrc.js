module.exports = {
  plugins: [require('@trivago/prettier-plugin-sort-imports')],
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  arrowParens: 'always',
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^components/(.*)$',
    '^hooks/(.*)$',
    '^data/(.*)$',
    '^types/(.*)$',
    '^[./]'
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
}
