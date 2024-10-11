import { createJiti } from "jiti";

const jiti = createJiti(import.meta.url);

/**
 * @type {import("./src/main.ts").default}
 */
const wondermarin = await jiti.import("./src/main.ts", { default: true });

const config = wondermarin({ typescript: true });

export default config;
