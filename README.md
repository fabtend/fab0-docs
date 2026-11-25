# fab0 documentation

**Run your software factory by chat.**

You describe how your work should move: what starts it, who or what does each step, and who decides. fab0 runs that
line. It hands each step to your agents and people, knows where every piece of work stands, and keeps the record of
everything that happened. It decides nothing for you.

📖 **Read the docs at [docs.fab0.dev](https://docs.fab0.dev).**

## Start in three steps

1. **Add the fab0 connector.**
   - claude.ai: Settings → Connectors, add a custom connector named `fab0` at `https://mcp.fab0.dev/mcp`, and press
     Connect.
   - Claude Code: `/plugin marketplace add fabtend/claude-plugin`, then `/plugin install fab0@fab0`.
2. **Say "set up fab0".** Claude answers as fab0's Foreman and walks you through it: signing in with GitHub, your
   first pipeline, and your first run.
3. **Ask "what's going on?"** whenever you like. Say "approve it" or "cancel it" to decide.

The [Quickstart](https://docs.fab0.dev/quickstart/) walks through each step.

## Documentation

| Page | What it covers |
| --- | --- |
| [Quickstart](https://docs.fab0.dev/quickstart/) | Add the connector, sign in with GitHub, and finish a first run |
| [Concepts](https://docs.fab0.dev/concepts/) | Pipelines, runs, steps, executors, signals, tenants, the Foreman and the record |

More pages are on the way: writing pipelines, executors, GitHub events, secrets, and a reference.

## More about fab0

- [fab0.dev](https://fab0.dev): what fab0 is for, and who it is for
- [The fab0 plugin for Claude Code](https://github.com/fabtend/claude-plugin)
- The JSON Schemas of [a pipeline](https://schema.fab0.dev/pipeline.v2.json) and of
  [a step's envelope](https://schema.fab0.dev/envelope.v5.json)
- [The privacy notice](https://fab0.dev/legal/privacy-policy): what fab0 keeps, where, for how long, and whom to ask

## Found something wrong?

[Open an issue](https://github.com/fabtend/fab0-docs/issues) with the page and what you expected to read. The
pages are in [`src/content/docs/`](src/content/docs/), and pull requests that fix them are welcome.
