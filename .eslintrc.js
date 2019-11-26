module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        "mocha": true
    },
    'extends': [
        'standard',
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    "parser": "babel-eslint",
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    "rules": {
        "semi": [2, "always"],
        "space-before-function-paren": ["error", "never"],
        "valid-jsdoc": [
            "error",
            {
              "requireReturn": true,
              "requireReturnType": true,
              "requireParamDescription": true,
              "requireReturnDescription": true,
              "preferType": {
                "String": "string",
                "object": "Object"
              }
            }
          ],
          "require-jsdoc": [
            "error",
            {
              "require": {
                "FunctionDeclaration": true,
                "MethodDefinition": true,
                "ClassDeclaration": true
              }
            }
          ],
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
};