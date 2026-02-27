// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: "https://Kareena2207.github.io",
  base: "/kareena-portfolio",

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx(), sitemap()]
});

