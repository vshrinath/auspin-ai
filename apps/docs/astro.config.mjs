import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [react(), mdx(), tailwind()],
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("../web/src", import.meta.url)),
      },
    },
    ssr: {
      noExternal: ["@salient/ui", "@headlessui/react", "@heroicons/react"],
    },
  },
});
