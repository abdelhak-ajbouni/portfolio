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
        forward: ["dataLayer.push"]
      }
    }),
    sitemap({
      customPages: [url],
      lastmod: new Date("2024-12-26")
    }),
    icon({
      include: {
        mdi: ["linkedin", "github", "gatsby", "tailwind", "wordpress", "graphql", "react", "hand-wave"],
        "akar-icons": ["nextjs-fill", "redux-fill"],
        "simple-icons": ["astro"],
        "cib": ["netlify"],
      },
    })
  ],
  adapter: netlify(),
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'three': ['three'],
            'react-three-fiber': ['@react-three/fiber'],
            'react-three-drei': ['@react-three/drei'],
          }
        }
      },
      chunkSizeWarningLimit: 1000, // Increase limit to 1MB
    }
  }
});