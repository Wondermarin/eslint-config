import { interopDefault } from "../utils/interop-default";
import { EGlob } from "../constants/glob";

import type { IConfig } from "../types/config";

export async function jsonConfig(): Promise<IConfig[]> {
  const [jsoncParser, packageJsonPlugin] = await Promise.all([
    interopDefault(import("jsonc-eslint-parser")),
    interopDefault(import("eslint-plugin-package-json")),
  ]);

  return [
    {
      name: "wondermarin/eslint-config/package-json",
      files: [EGlob.PACKAGE_JSON],
      languageOptions: {
        parser: jsoncParser,
      },
      plugins: {
        "package-json": packageJsonPlugin,
      },
      rules: {
        "package-json/order-properties": ["error", { order: "sort-package-json" }],
        "package-json/repository-shorthand": ["error", { form: "object" }],
        "package-json/sort-collections": [
          "error",
          ["scripts", "config", "dependencies", "peerDependencies", "devDependencies"],
        ],
        "package-json/unique-dependencies": "error",
        "package-json/valid-local-dependency": "error",
        "package-json/valid-name": "error",
        "package-json/valid-package-def": "error",
        "package-json/valid-repository-directory": "error",
        "package-json/valid-version": "error",
      },
    },
  ];
}
