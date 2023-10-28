{
  "env": {
      "browser": true,
      "es2021": true,
      "node": true
  },
  "extends": [
      "plugin:react/recommended",
      "standard",
      "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 12,
      "sourceType": "module"
  },
  "plugins": [
      "react",
      "@typescript-eslint",
      "prettier"
  ],
  "rules": {
      "prettier/prettier": "error",
      "space-before-function-paren": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": ["error"],
      "camelcase": "off",
      "@typescript-eslint/camelcase": "off"
  }
}