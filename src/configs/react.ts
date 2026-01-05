import { fixupPluginRules } from "@eslint/compat";

import type { ESLint } from "eslint";

import { interopDefault } from "../utils/interop-default";
import { EGlob } from "../constants/glob";

import type { IConfig } from "../types/config";

export async function reactConfig(): Promise<IConfig[]> {
  const [reactPlugin, reactHooksPlugin] = await Promise.all([
    interopDefault(import("eslint-plugin-react")),
    interopDefault(import("eslint-plugin-react-hooks")),
  ]);

  return [
    {
      name: "wondermarin/eslint-config/react",
      files: [EGlob.JSX, EGlob.TSX],
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      settings: {
        react: {
          version: "detect",
        },
      },
      plugins: {
        react: reactPlugin,
        "react-hooks": fixupPluginRules(reactHooksPlugin as ESLint.Plugin),
      },
      rules: {
        "react-hooks/exhaustive-deps": "warn",
        "react-hooks/rules-of-hooks": "error",
        "react/boolean-prop-naming": "off",
        "react/button-has-type": [
          "error",
          {
            button: true,
            reset: true,
            submit: true,
          },
        ],
        "react/checked-requires-onchange-or-readonly": [
          "error",
          {
            ignoreExclusiveCheckedAttribute: false,
            ignoreMissingProperties: false,
          },
        ],
        "react/default-props-match-prop-types": "off",
        "react/destructuring-assignment": [
          "error",
          "always",
          {
            destructureInSignature: "always",
            ignoreClassFields: false,
          },
        ],
        "react/display-name": "off",
        "react/forbid-component-props": "off",
        "react/forbid-dom-props": "off",
        "react/forbid-elements": "off",
        "react/forbid-foreign-prop-types": "off",
        "react/forbid-prop-types": "off",
        "react/function-component-definition": [
          "error",
          {
            namedComponents: "function-declaration",
            unnamedComponents: "arrow-function",
          },
        ],
        "react/hook-use-state": ["error", { allowDestructuredState: true }],
        "react/iframe-missing-sandbox": "error",
        "react/jsx-boolean-value": ["error", "never", { assumeUndefinedIsFalse: false }],
        "react/jsx-curly-brace-presence": [
          "error",
          {
            children: "never",
            propElementValues: "always",
            props: "never",
          },
        ],
        "react/jsx-filename-extension": "off",
        "react/jsx-fragments": ["error", "element"],
        "react/jsx-handler-names": [
          "error",
          {
            checkInlineFunction: true,
            checkLocalVariables: true,
            eventHandlerPrefix: "handle",
            eventHandlerPropPrefix: "on",
          },
        ],
        "react/jsx-key": [
          "error",
          {
            checkFragmentShorthand: true,
            checkKeyMustBeforeSpread: true,
            warnOnDuplicates: true,
          },
        ],
        "react/jsx-max-depth": "off",
        "react/jsx-no-bind": [
          "error",
          {
            allowArrowFunctions: true,
            allowBind: false,
            allowFunctions: false,
            ignoreDOMComponents: false,
            ignoreRefs: false,
          },
        ],
        "react/jsx-no-comment-textnodes": "error",
        "react/jsx-no-constructed-context-values": "error",
        "react/jsx-no-duplicate-props": ["error", { ignoreCase: true }],
        "react/jsx-no-leaked-render": ["error", { validStrategies: ["coerce", "ternary"] }],
        "react/jsx-no-literals": "off",
        "react/jsx-no-script-url": "error",
        "react/jsx-no-target-blank": [
          "error",
          {
            allowReferrer: false,
            enforceDynamicLinks: "always",
            forms: false,
            links: true,
            warnOnSpreadAttributes: false,
          },
        ],
        "react/jsx-no-undef": ["error", { allowGlobals: false }],
        "react/jsx-no-useless-fragment": ["error", { allowExpressions: false }],
        "react/jsx-pascal-case": [
          "error",
          {
            allowAllCaps: false,
            allowLeadingUnderscore: false,
            allowNamespace: false,
          },
        ],
        "react/jsx-props-no-spread-multi": "error",
        "react/jsx-props-no-spreading": "off",
        "react/jsx-sort-props": "off",
        "react/jsx-uses-react": "off",
        "react/jsx-uses-vars": "error",
        "react/no-access-state-in-setstate": "error",
        "react/no-adjacent-inline-elements": "off",
        "react/no-array-index-key": "off",
        "react/no-arrow-function-lifecycle": "error",
        "react/no-children-prop": ["error", { allowFunctions: false }],
        "react/no-danger": "off",
        "react/no-danger-with-children": "error",
        "react/no-deprecated": "error",
        "react/no-did-mount-set-state": "error",
        "react/no-did-update-set-state": "error",
        "react/no-direct-mutation-state": "error",
        "react/no-find-dom-node": "error",
        "react/no-invalid-html-attribute": "error",
        "react/no-is-mounted": "error",
        "react/no-multi-comp": ["error", { ignoreStateless: false }],
        "react/no-namespace": "error",
        "react/no-object-type-as-default-prop": "error",
        "react/no-redundant-should-component-update": "error",
        "react/no-render-return-value": "error",
        "react/no-set-state": "off",
        "react/no-string-refs": ["error", { noTemplateLiterals: true }],
        "react/no-this-in-sfc": "error",
        "react/no-typos": "error",
        "react/no-unescaped-entities": "error",
        "react/no-unknown-property": ["error", { requireDataLowercase: true }],
        "react/no-unsafe": ["error", { checkAliases: false }],
        "react/no-unstable-nested-components": ["error", { allowAsProps: false }],
        "react/no-unused-class-component-methods": "error",
        "react/no-unused-prop-types": ["error", { skipShapeProps: true }],
        "react/no-unused-state": "error",
        "react/no-will-update-set-state": "error",
        "react/prefer-es6-class": ["error", "always"],
        "react/prefer-exact-props": "off",
        "react/prefer-read-only-props": "error",
        "react/prefer-stateless-function": ["error", { ignorePureComponents: false }],
        "react/prop-types": ["error", { skipUndeclared: false }],
        "react/react-in-jsx-scope": "off",
        "react/require-default-props": "off",
        "react/require-optimization": "error",
        "react/require-render-return": "error",
        "react/self-closing-comp": [
          "error",
          {
            component: true,
            html: true,
          },
        ],
        "react/sort-comp": "off",
        "react/sort-default-props": "off",
        "react/sort-prop-types": "off",
        "react/state-in-constructor": ["error", "always"],
        "react/static-property-placement": "off",
        "react/style-prop-object": "error",
        "react/void-dom-elements-no-children": "error",
        "react/forward-ref-uses-ref": "error",
      },
    },
  ];
}
