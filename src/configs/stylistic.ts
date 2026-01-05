import { interopDefault } from "../utils/interop-default";
import { EGlob } from "../constants/glob";

import type { IConfig } from "../types/config";

export async function stylisticConfig(): Promise<IConfig[]> {
  const [prettierConfig, prettierPlugin, perfectionistPlugin] = await Promise.all([
    interopDefault(import("eslint-config-prettier")),
    interopDefault(import("eslint-plugin-prettier")),
    interopDefault(import("eslint-plugin-perfectionist")),
  ]);

  return [
    {
      name: "wondermarin/eslint-config/prettier",
      files: [EGlob.JS, EGlob.JSX, EGlob.TS, EGlob.TSX, EGlob.VUE],
      plugins: {
        prettier: prettierPlugin,
      },
      rules: {
        "prettier/prettier": "error",
        ...prettierConfig.rules,
      },
    },
    {
      name: "wondermarin/eslint-config/perfectionist",
      files: [EGlob.JS, EGlob.JSX, EGlob.TS, EGlob.TSX, EGlob.VUE],
      plugins: {
        perfectionist: perfectionistPlugin,
      },
      rules: {
        "perfectionist/sort-array-includes": "off",
        "perfectionist/sort-astro-attributes": "off",
        "perfectionist/sort-classes": "off",
        "perfectionist/sort-enums": "off",
        "perfectionist/sort-exports": [
          "error",
          {
            type: "line-length",
            order: "desc",
            ignoreCase: true,
            specialCharacters: "keep",
            partitionByComment: false,
            partitionByNewLine: true,
            groupKind: "values-first",
            matcher: "minimatch",
          },
        ],
        "perfectionist/sort-imports": [
          "error",
          {
            type: "line-length",
            order: "desc",
            ignoreCase: true,
            specialCharacters: "keep",
            internalPattern: ["@/**"],
            sortSideEffects: false,
            newlinesBetween: "always",
            maxLineLength: 120,
            groups: [
              "builtin",
              "builtin-type",
              "external",
              "external-type",
              "internal",
              "internal-type",
              "parent",
              "parent-type",
              "sibling",
              "sibling-type",
              "index",
              "index-type",
              "side-effect",
              "side-effect-style",
            ],
            customGroups: {},
            matcher: "minimatch",
            environment: "node",
          },
        ],
        "perfectionist/sort-interfaces": "off",
        "perfectionist/sort-intersection-types": "off",
        "perfectionist/sort-jsx-props": "off",
        "perfectionist/sort-maps": "off",
        "perfectionist/sort-named-exports": [
          "error",
          {
            type: "line-length",
            order: "desc",
            ignoreCase: true,
            specialCharacters: "keep",
            groupKind: "values-first",
            partitionByComment: false,
            partitionByNewLine: true,
            matcher: "minimatch",
          },
        ],
        "perfectionist/sort-named-imports": [
          "error",
          {
            type: "line-length",
            order: "desc",
            ignoreCase: true,
            specialCharacters: "keep",
            ignoreAlias: false,
            groupKind: "values-first",
            partitionByComment: false,
            partitionByNewLine: true,
            matcher: "minimatch",
          },
        ],
        "perfectionist/sort-object-types": "off",
        "perfectionist/sort-objects": "off",
        "perfectionist/sort-svelte-attributes": "off",
        "perfectionist/sort-switch-case": "off",
        "perfectionist/sort-union-types": "off",
        "perfectionist/sort-variable-declarations": "off",
        "perfectionist/sort-vue-attributes": "off",
      },
    },
  ];
}
