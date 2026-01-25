import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  outDir: 'docs',
  build: {
    format: 'file'
  },
  vite: {
    build: {
      emptyOutDir: false,
    }
  },
  integrations: [tailwind(), react()]
});
