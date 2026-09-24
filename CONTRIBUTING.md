# Contributing to the Codazo for Obsidian site

This repository is the site's home. Branch from `dev` and open a pull request against `dev`; CI runs the Astro check, the tests, and a build. Merging `dev` into `main` deploys to https://plugin.codazo.io/ automatically, so `main` is always what the site shows.

```sh
npm ci
npm run dev        # http://localhost:4181/
npm run ci         # astro check, tests, build
```

Keep the copy accurate to what the plugin actually does; the plugin lives at https://github.com/InformaticsFYI/codazo-obsidian. The feedback illustration is a synthetic fixture, never real learner writing. No provider calls, no analytics.
