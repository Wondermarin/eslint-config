import { defu } from "defu";

import { findProjectRoot } from "./utils/find-project-root";
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

  const projectRoot = findProjectRoot();

  const configs = await Promise.all([
    baseConfig(projectRoot),
    options.javascript ? javascriptConfig() : [],
    options.typescript ? typescriptConfig(projectRoot) : [],
    options.stylistic ? stylisticConfig() : [],
    options.json ? jsonConfig() : [],
    options.react ? reactConfig() : [],
  ]);

  return configs.flat();
}

export default wondermarin;
