let nextStart = require("next/dist/cli/next-start.js").nextStart;
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
