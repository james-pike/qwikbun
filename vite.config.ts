// import { defineConfig } from "vite";
// import { qwikVite } from "@builder.io/qwik/optimizer";
// import tsconfigPaths from "vite-tsconfig-paths";

// export default defineConfig(() => {
//   return {
//     build: {
//       base: '/',  // Adjust base path for deployment
//       rollupOptions: {
//         input: 'index.html',  // Ensure the correct entry point for your build
//       },
//       target: "es2020",
//       lib: {
//         entry: "./src/index.tsx",
//         formats: ["es", "cjs"],
//         fileName: (format) => `index.qwik.${format === "es" ? "mjs" : "cjs"}`,
//       },
//       outDir: "dist",  // Ensure the build output goes to the dist directory
//     },
//     plugins: [qwikVite(), tsconfigPaths()],
//   };
// });




import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { SITE } from './config.mjs';



export default defineConfig(() => {
    return {
        base: SITE.basePathname,
        plugins: [
            qwikCity({
                trailingSlash: SITE.trailingSlash,
            }),
            qwikVite(),
            tsconfigPaths(),
        ],
        preview: {
            headers: {
                'Cache-Control': 'public, max-age=600',
            },
        }
    };
});
