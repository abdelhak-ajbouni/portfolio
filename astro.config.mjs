import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import icon from "astro-icon";

const url = 'https://abdelhak-ajbouni.com';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: url,
  integrations: [
    react(),
    tailwind(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
        mainWindowAccessors: ["dataLayer"]
      }
    }),
    sitemap({
      customPages: [url],
      lastmod: new Date("2024-12-26")
    }),
    icon({
      include: {
        mdi: ["linkedin", "github", "hand-wave"],
      },
    })
  ],
  adapter: netlify(),
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/three/')) return 'three';
            if (id.includes('@react-three/fiber')) return 'react-three-fiber';
            if (id.includes('@react-three/drei')) return 'react-three-drei';
          }
        }
      }
    }
  }
});