import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://makiyuu-okatazuke.netlify.app",
  integrations: [tailwind(), react(), sitemap()],
  image: {
    domains: ["astro.build"]
  }
});