import process from "node:process";
import { defineConfig } from "astro/config";

// GitHub Pages serves a project site under /<repository>/. The publish
// workflow sets PAGES_SITE and PAGES_BASE; a custom domain later means
// PAGES_BASE="/" and a CNAME file in public/.
export default defineConfig({
  site: process.env.PAGES_SITE ?? "https://informaticsfyi.github.io",
  base: process.env.PAGES_BASE ?? "/codazo-pages",
  trailingSlash: "always",
  // 4181 keeps clear of the marketing site (4180), the root dev server (4190), and Playwright (4173).
  server: { port: Number(process.env.PORT ?? 4181) },
});
