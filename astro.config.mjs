import process from "node:process";
import { defineConfig } from "astro/config";

// Served at the custom domain plugin.codazo.io (public/CNAME keeps GitHub Pages
// pointed there across publishes). The workflow sets PAGES_SITE and PAGES_BASE;
// without a custom domain a project site would need PAGES_BASE=/<repository>.
export default defineConfig({
  site: process.env.PAGES_SITE ?? "https://plugin.codazo.io",
  base: process.env.PAGES_BASE ?? "/",
  trailingSlash: "always",
  // 4181 keeps clear of the marketing site (4180), the root dev server (4190), and Playwright (4173).
  server: { port: Number(process.env.PORT ?? 4181) },
});
