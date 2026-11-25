# fab0-docs

The public documentation of fab0, served at https://docs.fab0.dev. An Astro Starlight site, built to static files in
`dist/` and served by the Cloudflare Worker `fab0-docs` with static assets (no Worker script, no adapter).

## Commands

- `pnpm dev`: dev server
- `pnpm check`: `astro check`, must report 0 errors
- `pnpm build`: static build to `dist/`, with the Pagefind search index
- `pnpm preview`: serve the build; `pnpm exec wrangler dev` serves `dist/` as Cloudflare does, with `public/_headers`
- `pnpm run deploy`: build and `wrangler deploy` by hand; normally Workers Builds deploys

## Deploy

Cloudflare Workers Builds is connected to this repository: every push to `main` builds (`pnpm build`) and deploys
(`npx wrangler deploy`) to production at `docs.fab0.dev`. Other branches aren't built and have no preview URL; check
a change locally with `pnpm build` and `pnpm preview`. `.github/workflows/ci.yml` checks each pull request. No
Cloudflare token is kept in GitHub. Roll back with `pnpm exec wrangler rollback`.

## Content

- Pages are `src/content/docs/*.mdx`; the sidebar is in `astro.config.mjs`.
- The source of truth for how fab0 works is the guide its MCP server serves (the `guide` tool). Pages explain it for
  people and must not contradict it. When fab0 changes, change the page.
- Public: no secret, account id, internal resource name, person's name or email. No analytics, cookies or forms.
- The brand follows fab0.dev's design system (fabtend/fab0-website, `docs/design-system.md`), in
  `src/styles/brand.css`.
- Write plainly: short sentences, second person, no marketing claims.
