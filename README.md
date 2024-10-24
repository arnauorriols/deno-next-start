# Use `next start` in Deno Deploy

This package enables the use of `next start` in Deno Deploy, by replicating the
command as a param-less entrypoint configurable via env variables.

# Usage

Set `jsr:@deno/nextjs-start` as the entrypoint of your Next.js app.

When linking your Git repository in the Dash frontend, Deno Deploy will
automatically discover that the project uses Next.js and will set the Github
Action automatially using this entrypoint.

If you prefer deploying via CLI, following the next steps:

1. Build your app

```bash
deno run build
```

2. Deploy

```bash
deployctl deploy --include=.next --include=public jsr:@deno/nextjs-start
```

Make sure to use the `--include=.next --include=public` option, particularly if
your project configuration is in commonjs and the config file has the `.js`
extension (ie `next.config.js`).

# Configuration

The following envs are available for configuration:

- `DENO_NEXT_START_KEEP_ALIVE_TIMEOUT`: Specify the maximum amount of
  milliseconds to wait before closing inactive connections.
- `DENO_NEXT_START_DIRECTORY`: Specify the directory where the production build
  should be located. Defaults to `.next`.
