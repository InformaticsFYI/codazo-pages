# Codazo for Obsidian — site

The public site for the Codazo Obsidian plugin, served at **https://plugin.codazo.io/** from GitHub Pages. Static Astro; no application code, no provider calls, no analytics.

- Plugin: https://github.com/InformaticsFYI/codazo-obsidian (also listed in Obsidian's community plugins as `codazo`).
- Develop: `npm ci`, then `npm run dev` for http://localhost:4181/ and `npm run ci` for the Astro check, tests, and build.
- Branches: work happens on `dev`; `main` is the published site.
- Deploy: merging `dev` into `main` runs the Deploy workflow, which builds and publishes `dist/` to the `gh-pages` branch. `public/CNAME` keeps GitHub Pages pointed at the custom domain.

The feedback illustration on the home page is built from `src/data/sample-review.json`, a synthetic fixture authored for the Codazo review contract. It is labeled as a sample on the page and is not a model response.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the workflow.
