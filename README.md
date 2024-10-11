# @wondermarin/eslint-config
Personal <a href="https://eslint.org">ESLint</a> config.

> [!IMPORTANT]
> This package is strictly for personal use. If anyone wants to use it in their projects, please pay attention to the specific <a href="#versioning-policy">versioning policy</a>.

## Installation
```sh
pnpm add -D @wondermarin/eslint-config
```

## Usage
`eslint.config.js`
```js
import wondermarin from "@wondermarin/eslint-config";

export default wondermarin({
  /**
   * ESLint config.
   * @default true
   */
  javascript: true,

  /**
   * `@typescript-eslint/eslint-plugin` config.
   * @default false
   */
  typescript: false,

  /**
   * `eslint-plugin-prettier`, `@stylistic/eslint-plugin`, and `eslint-plugin-perfectionist` config.
   * @default true
   */
  stylistic: true,

  /**
   * `eslint-plugin-package-json` config.
   * @default true
   */
  json: true,

  /**
   * `eslint-plugin-react` and `eslint-plugin-react-hooks` config.
   * @default false
   */
  react: false,
});
```

## Versioning Policy
The package follows <a href="https://semver.org">semantic versioning</a> with some specific nuances:
* **Patch release**: A rule is disabled.
* **Minor release**:
  * A new configuration is added.
  * A new rule is added (or a previously disabled rule is enabled).
  * A rule is updated (updating its options or changing its severity).
* **Major release**: Major release in ESLint.

## License
Code released under the <a href="https://github.com/Wondermarin/eslint-config/tree/main/LICENSE">MIT</a> license.
