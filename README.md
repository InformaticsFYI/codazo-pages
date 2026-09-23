# Codazo for Obsidian — site

Static Astro site for the Codazo Obsidian plugin, published to GitHub Pages from the public `InformaticsFYI/codazo-pages` repository. It shares no runtime code with the plugin or the apps and never calls a provider.

It is a sibling of `apps/marketing` with the same palette and components, focused on the plugin: overview, how it works, and install. The feedback illustration reads a committed copy of the project's synthetic fixture (`src/data/sample-review.json`); `tests/pages` checks it stays identical to the shared fixture.

## Run

```sh
cd apps/pages
npm run dev        # http://localhost:4181/codazo-pages/
npm run typecheck  # astro check
npm run build      # static output in dist/
```

From the repository root: `npm run pages:dev`, `npm run pages:typecheck`, `npm run pages:build`.

## Base path

GitHub Pages serves project sites under `/<repository>/`, so `astro.config.mjs` defaults to `site = https://informaticsfyi.github.io` and `base = /codazo-pages`. Every internal link goes through `href()` in `src/lib/site.ts`, which respects the base. For a custom domain later, set `PAGES_SITE` and `PAGES_BASE=/` in the publish workflow and add a `CNAME` file to `public/`.

## Publishing

See `docs/operations/pages-publish.md`. Nothing publishes on push.
