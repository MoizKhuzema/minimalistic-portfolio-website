module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "next",
    "next/core-web-vitals",
    "plugin:react/recommended",
    "xo",
    "xo-typescript",
    "xo-react",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    // Next.js
    "@typescript-eslint/triple-slash-reference": "off",
    "react/react-in-jsx-scope": "off",

    // Trailing spaces not allowed
    "no-trailing-spaces": "off",

    // Indentation and spacing
    "no-tabs": ["error"],
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],

    // Curly spacing and other format rules
    "@typescript-eslint/object-curly-spacing": ["error", "always"],
    "react-hooks/exhaustive-deps": "off",
    "@typescript-eslint/comma-dangle": "off",
    "react/function-component-definition": "off",
    "react/jsx-tag-spacing": "off",
    "react/no-unescaped-entities": "off",
    "no-mixed-operators": "off",
    "operator-linebreak": "off",
    "@typescript-eslint/naming-convention": "off",
    "quote-props": "off",
    "@typescript-eslint/quotes": "off",
    "react/jsx-curly-newline": "off",
    "@typescript-eslint/indent": "off",
    "jsx-quotes": "off",
    "arrow-parens": ["error", "always"],
    "react/prefer-read-only-props": "off",
    "@typescript-eslint/ban-types": "off",
    radix: "off",

    // Custom comments warning
    "no-warning-comments": ["error", { "terms": ["todo", "fixme"], "location": "anywhere" }]
  },
};
