import { defu } from "defu";

import { javascriptConfig } from "./configs/javascript";
import { typescriptConfig } from "./configs/typescript";
import { stylisticConfig } from "./configs/stylistic";
import { reactConfig } from "./configs/react";
import { baseConfig } from "./configs/base";
import { jsonConfig } from "./configs/json";

interface IWondermarinOptions {
  /**
   * [ESLint](https://github.com/eslint/eslint) config.
   * @default true
   */
  readonly javascript?: boolean;

  /**
   * [`@typescript-eslint/eslint-plugin`](https://github.com/typescript-eslint/typescript-eslint) config.
   * @default false
   */
  readonly typescript?: boolean;

  /**
   * [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier), [`@stylistic/eslint-plugin`](https://github.com/eslint-stylistic/eslint-stylistic), and [`eslint-plugin-perfectionist`](https://github.com/azat-io/eslint-plugin-perfectionist) config.
   * @default true
   */
  readonly stylistic?: boolean;

  /**
   * [`eslint-plugin-package-json`](https://github.com/JoshuaKGoldberg/eslint-plugin-package-json) config.
   * @default true
   */
  readonly json?: boolean;

  /**
   * [`eslint-plugin-react`](https://github.com/jsx-eslint/eslint-plugin-react) and [`eslint-plugin-react-hooks`](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks) config.
   * @default false
   */
  readonly react?: boolean;
}

async function wondermarin(options?: IWondermarinOptions) {
  options = defu(options, {
    javascript: true,
    stylistic: true,
    json: true,
  } satisfies IWondermarinOptions);

  const config = [...baseConfig()];

  if (options.javascript) config.push(...javascriptConfig());

  if (options.typescript) config.push(...(await typescriptConfig()));

  if (options.stylistic) config.push(...(await stylisticConfig()));

  if (options.json) config.push(...(await jsonConfig()));

  if (options.react) config.push(...(await reactConfig()));

  return config;
}

export default wondermarin;
