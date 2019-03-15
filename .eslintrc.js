const confusingBrowserGlobals = require("confusing-browser-globals");

module.exports = {
  root: true,

  parserOptions: {
    // "parser": "babel-eslint",
    sourceType: "module",
    ecmaVersion: 2019,
  },

  env: {
    // "es6": true,
    // "node": true
  },

  plugins: ["import", "unicorn"],

  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:unicorn/recommended",
    "plugin:vue/recommended",
    "prettier",
    // "prettier/babel",
    "prettier/unicorn",
    "prettier/vue",
  ],

  rules: {
    // Possible Errors (over recommended ones)

    "no-async-promise-executor": "error",
    "no-await-in-loop": "error",
    "no-cond-assign": ["error", "always"],
    "no-constant-condition": ["error", { checkLoops: false }],
    "no-template-curly-in-string": "error",
    "require-atomic-updates": "error",
    "valid-typeof": ["error", { requireStringLiterals: true }],

    // Best Practices (over recommended ones)

    "accessor-pairs": "error",
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "class-methods-use-this": "error",
    "consistent-return": "error",
    "default-case": ["error", { commentPattern: "^no default$" }],
    "dot-notation": "error",
    eqeqeq: ["error", "always", { null: "ignore" }],
    "guard-for-in": "error",
    "max-classes-per-file": "error",
    "no-alert": "error",
    "no-caller": "error",

    "no-empty-function": [
      "error",
      { allow: ["arrowFunctions", "functions", "methods"] },
    ],

    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-implicit-coercion": "error",
    "no-implied-eval": "error",
    "no-iterator": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-multi-str": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",

    "no-proto": "error",

    "no-restricted-properties": [
      "error",
      {
        object: "arguments",
        property: "callee",
        message: "arguments.callee is deprecated",
      },
      {
        object: "global",
        property: "isFinite",
        message: "Please use Number.isFinite instead",
      },
      {
        object: "self",
        property: "isFinite",
        message: "Please use Number.isFinite instead",
      },
      {
        object: "window",
        property: "isFinite",
        message: "Please use Number.isFinite instead",
      },
      {
        object: "global",
        property: "isNaN",
        message: "Please use Number.isNaN instead",
      },
      {
        object: "self",
        property: "isNaN",
        message: "Please use Number.isNaN instead",
      },
      {
        object: "window",
        property: "isNaN",
        message: "Please use Number.isNaN instead",
      },
      {
        property: "__defineGetter__",
        message: "Please use Object.defineProperty instead.",
      },
      {
        property: "__defineSetter__",
        message: "Please use Object.defineProperty instead.",
      },
      {
        object: "Math",
        property: "pow",
        message: "Use the exponentiation operator (**) instead.",
      },
    ],

    "no-return-assign": ["error", "always"],
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": "error",
    "no-useless-call": "error",
    "no-useless-catch": "error",
    "no-useless-concat": "error",
    "no-useless-return": "error",
    "no-void": "error",
    "no-with": "error",
    "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],
    radix: "error",
    yoda: "error",

    // Strict (over recommended ones)

    strict: ["error", "never"],

    // Variables (over recommended ones)

    "no-label-var": "error",

    "no-restricted-globals": ["error", "isFinite", "isNaN"].concat(
      confusingBrowserGlobals,
    ),

    "no-shadow-restricted-names": "error",
    "no-undef-init": "error",

    "no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: true },
    ],

    "no-use-before-define": [
      "error",
      { functions: false, classes: false, variables: false },
    ],

    // Node.js and Common JS (over recommended ones)

    "global-require": "error",
    "no-new-require": "error",
    "no-path-concat": "error",

    // Stylistic Issues (over recommended ones)

    camelcase: ["error", { properties: "never" }],
    "lines-between-class-members": "error",
    "new-cap": ["error", { newIsCap: true, capIsNew: false }],
    "no-array-constructor": "error",
    "no-bitwise": "error",
    "no-continue": "error",
    "no-lonely-if": "error",
    "no-multi-assign": "error",
    "no-negated-condition": "error",
    "no-nested-ternary": "error",
    "no-new-object": "error",

    "no-restricted-syntax": [
      "error",
      {
        selector: "LabeledStatement",
        message:
          "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        selector: "WithStatement",
        message:
          "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],

    "no-unneeded-ternary": ["error", { defaultAssignment: false }],
    "one-var": ["error", "never"],
    "prefer-object-spread": "error",

    "spaced-comment": [
      "error",
      "always",
      {
        line: { markers: ["*package", "!", "/", ",", "="] },
        block: {
          balanced: true,
          markers: ["*package", "!", ",", ":", "::", "flow-include"],
          exceptions: ["*"],
        },
      },
    ],

    // ECMAScript 6 (over recommended ones)

    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",

    "object-shorthand": ["error", "always", { ignoreConstructors: false }],

    "prefer-const": [
      "error",
      { destructuring: "all", ignoreReadBeforeAssign: true },
    ],

    "prefer-destructuring": [
      "error",
      {
        VariableDeclarator: { array: false, object: true },
        AssignmentExpression: { array: false, object: true },
      },
      { enforceForRenamedProperties: false },
    ],

    "prefer-numeric-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "symbol-description": "error",

    // Unicorn

    "unicorn/filename-case": "off",
  },
};
