// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "AI Daily News";
export const SITE_DESCRIPTION =
  "Welcome to Daily AI News, your source for the latest news and information about artificial intelligence.";
export const TWITTER_HANDLE = "@yourtwitterhandle";
export const MY_NAME = "AI Daily News";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
