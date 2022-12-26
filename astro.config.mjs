import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://abdelhak-ajbouni.com',
  integrations: [
    tailwind(),
    sitemap({
      customPages: [
        'https://abdelhak-ajbouni.com', // homepage
      ],
      lastmod: new Date("2022-12-26"),
    }),
    react()],
  adapter: netlify()
});