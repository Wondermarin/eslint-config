import { defineConfig } from "tsup";

const config = defineConfig({
  entry: ["src/main.ts"],
  format: "esm",
  outDir: "dist",
  clean: true,
  dts: true,
  treeshake: true,
  skipNodeModulesBundle: true,
  removeNodeProtocol: false,
  noExternal: ["@eslint/compat", "defu"],
});

export default config;
