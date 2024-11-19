import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    build: {
      base: '/',  // Adjust base path for deployment
      rollupOptions: {
        input: 'index.html',  // Ensure the correct entry point for your build
      },
      target: "es2020",
      lib: {
        entry: "./src/index.ts",
        formats: ["es", "cjs"],
        fileName: (format) => `index.qwik.${format === "es" ? "mjs" : "cjs"}`,
      },
      outDir: "dist",  // Ensure the build output goes to the dist directory
    },
    plugins: [qwikVite(), tsconfigPaths()],
  };
});
