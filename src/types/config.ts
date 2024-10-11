import type { Linter } from "eslint";

export interface IConfig extends Omit<Linter.Config, "plugins"> {
  readonly plugins?: Record<string, unknown>;
}
