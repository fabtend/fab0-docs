# fab0-docs

The documentation of [fab0](https://fab0.dev), at **https://docs.fab0.dev**.

Built with [Astro Starlight](https://starlight.astro.build) and served by Cloudflare Workers with static assets.

## Work on it

```bash
pnpm install
pnpm dev
```

Pages are in `src/content/docs/`. Before a pull request:

```bash
pnpm check
pnpm build
```

## Deploy

Cloudflare Workers Builds deploys `main` to `docs.fab0.dev` on every push, and gives every other branch a preview URL.
GitHub Actions checks each pull request (`.github/workflows/ci.yml`).
