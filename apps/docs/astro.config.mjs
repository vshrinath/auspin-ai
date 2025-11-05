import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [react(), mdx()],
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("../web/src", import.meta.url)),
      },
    },
  },
});
