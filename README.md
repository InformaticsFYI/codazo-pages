# Codazo for Obsidian — site

Static Astro site for the Codazo Obsidian plugin, published to GitHub Pages from the public `InformaticsFYI/codazo-pages` repository. It shares no runtime code with the plugin or the apps and never calls a provider.

It is a sibling of `apps/marketing` with the same palette and components, focused on the plugin: overview, how it works, and install. The feedback illustration reads a committed copy of the project's synthetic fixture (`src/data/sample-review.json`); `tests/pages` checks it stays identical to the shared fixture.

## Run

```sh
cd apps/pages
npm run dev        # http://localhost:4181/
npm run typecheck  # astro check
npm run build      # static output in dist/
```

From the repository root: `npm run pages:dev`, `npm run pages:typecheck`, `npm run pages:build`.

## Base path

The site is served at the custom domain `https://plugin.codazo.io/`, so `astro.config.mjs` defaults to that site and `base = /`, and `public/CNAME` carries the domain so every publish keeps GitHub Pages pointed at it. Every internal link goes through `href()` in `src/lib/site.ts`, which respects the base, so the site would also work under a repository sub-path by setting `PAGES_BASE`.

## Publishing

See `docs/operations/pages-publish.md`. Nothing publishes on push.
