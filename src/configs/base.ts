import { join } from "node:path";

import { includeIgnoreFile } from "@eslint/compat";
import globals from "globals";

import { EGlob } from "../constants/glob";

import type { IConfig } from "../types/config";

export function baseConfig(projectRoot: string): IConfig[] {
  return [
    {
      name: "wondermarin/eslint-config",
      files: [EGlob.JS, EGlob.JSX, EGlob.TS, EGlob.TSX, EGlob.VUE],
      languageOptions: {
        ecmaVersion: 2024,
        sourceType: "module",
        parserOptions: {
          ecmaVersion: 2024,
          sourceType: "module",
        },
        globals: {
          ...globals.node,
          ...globals.browser,
        },
      },
    },
    {
      name: "wondermarin/eslint-config/ignores",
      ignores: includeIgnoreFile(join(projectRoot, ".gitignore")).ignores,
    },
  ];
}
