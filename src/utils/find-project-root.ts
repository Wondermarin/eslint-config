import { dirname, join } from "node:path";
import { existsSync } from "node:fs";

export function findProjectRoot() {
  const startDir = process.cwd();
  let currentDir = startDir;

  while (!currentDir.endsWith("\\")) {
    if (existsSync(join(currentDir, "package.json"))) return currentDir;

    currentDir = dirname(currentDir);
  }

  return startDir;
}
