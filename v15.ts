import { nextStart } from "npm:next@^15/dist/cli/next-start.js";
const keepAliveTimeoutEnv = Deno.env.get("DENO_NEXT_START_KEEP_ALIVE_TIMEOUT");
const keepAliveTimeout = keepAliveTimeoutEnv &&
    parseInt(keepAliveTimeoutEnv) ||
  undefined;
const directory = Deno.env.get("DENO_NEXT_START_DIRECTORY");
nextStart({
  hostname: "0.0.0.0",
  port: 80,
  keepAliveTimeout,
}, directory);
