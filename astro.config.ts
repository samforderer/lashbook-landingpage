// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
site: 'https://my-site.com/', // this line is required

  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: netlify(),
});