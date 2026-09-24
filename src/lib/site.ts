export const SITE_NAME = "Codazo for Obsidian";
export const PRODUCT_PHRASE = "Spanish Composition Assistant";
export const SITE_DESCRIPTION =
  "Codazo for Obsidian reviews the Spanish you write in your own Obsidian vault, only when you request it, and without simply rewriting your notes and thoughts. Feedback stays anchored to your exact words; study material grows from them.";
export const ORGANIZATION_NAME = "Informatics FYI, Inc.";
export const PLUGIN_REPO = "https://github.com/InformaticsFYI/codazo-obsidian";
export const PLUGIN_RELEASES = `${PLUGIN_REPO}/releases`;
export const PLUGIN_ID = "codazo";
/** The plugin's page in Obsidian's community directory, and the in-app deep link that opens it. */
export const COMMUNITY_URL = `https://community.obsidian.md/plugins/${PLUGIN_ID}`;
export const OBSIDIAN_INSTALL_LINK = `obsidian://show-plugin?id=${PLUGIN_ID}`;

/** The loop every Codazo surface is built around. */
export const LEARNING_LOOP = ["write", "feedback", "revise", "cumulative study", "export"] as const;

/** Site-relative link that respects the GitHub Pages base path. */
export function href(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return path === "/" ? `${base}/` : `${base}${path.replace(/\/?$/, "/")}`;
}
