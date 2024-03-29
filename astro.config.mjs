import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify/functions";
import image from "@astrojs/image";
const url = 'https://abdelhak-ajbouni.com';

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: url,
  integrations: [react(), tailwind(), partytown(),
  sitemap({
    customPages: [url],
    lastmod: new Date("2022-12-26")
  }),
  image({
    serviceEntryPoint: '@astrojs/image/sharp',
  })],
  adapter: netlify()
});