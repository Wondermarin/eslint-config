# @wondermarin/eslint-config
<span>Personal <a href="https://eslint.org">ESLint</a> config.</span>

## Install

```sh
yarn add -D @wondermarin/eslint-config
```

## Usage

`.eslintrc`:
```jsonc
{
  "extends": [
    "@wondermarin/eslint-config", // Base config.
    "@wondermarin/eslint-config/typescript", // TypeScript config.
    "@wondermarin/eslint-config/react" // React & React Hooks config.
  ]
}
```
