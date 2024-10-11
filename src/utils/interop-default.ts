import type { TAwaitable } from "../types/awaitable";

export async function interopDefault<T extends Record<string, any>>(
  module: TAwaitable<{ default: T }> | TAwaitable<T>
): Promise<T> {
  return Promise.resolve(module).then((v) => v.default ?? v);
}
