import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";
import react from "@astrojs/react";
import vercel from '@astrojs/vercel/edge';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  vite: {
    ssr: {
      external: ["svgo"]
    }
  },
  integrations: [tailwind(), sitemap(), image(), react()],
  adapter: vercel()
});