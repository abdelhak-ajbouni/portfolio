import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
// import vercel from '@astrojs/vercel/edge';
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://abdelhak-ajbouni.vercel.app',
  integrations: [
    tailwind(),
    // TODO: fix skipped sitemap generation in build. error: No pages found! We can only detect sitemap routes for "static" builds
    sitemap(), 
    react()],
  adapter: netlify()
});