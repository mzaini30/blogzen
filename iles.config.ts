import { defineConfig } from "iles";
import WindiCSS from "vite-plugin-windicss";

export default defineConfig({
  svelte: true,
  siteUrl: "https://blogzen.js.org",
  vite: {
    optimizeDeps: {
      include: ["svelte"],
    },
    plugins: [WindiCSS()],
  },
});
