# Contributing to the Codazo for Obsidian site

This repository is the site's home. Branch from `main`, open a pull request against `main`, and CI will run the Astro check, the tests, and a build. Merging to `main` deploys to https://plugin.codazo.io/ automatically.

```sh
npm ci
npm run dev        # http://localhost:4181/
npm run ci         # astro check, tests, build
```

Keep the copy accurate to what the plugin actually does; the plugin lives at https://github.com/InformaticsFYI/codazo-obsidian. The feedback illustration is a synthetic fixture, never real learner writing. No provider calls, no analytics.
