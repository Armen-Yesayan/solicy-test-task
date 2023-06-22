let prettierConfig = require("./.prettierrc");

module.exports = {
  extends: ["plugin:@typescript-eslint/recommended", "prettier"],
  rules: {
    "prettier/prettier": ["error", prettierConfig],
    "react/no-unescaped-entities": "off",
    "import/no-anonymous-default-export": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "react/jsx-key": "off",
    "react/display-name": "off",

    semi: ["error", "always", { omitLastInOneLineBlock: false }],
    "semi-style": ["error", "last"],
    "no-extra-semi": ["error"],
    "semi-spacing": ["error", { before: false, after: true }],

    "newline-before-return": "error",
    // add new line below import
    "import/newline-after-import": [
      "error",
      {
        count: 1
      }
    ],

    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_"
      }
    ]
  },
  plugins: ["prettier", "import", "simple-import-sort", "unused-imports"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: ["./tsconfig.json"]
      }
    }
  }
};
