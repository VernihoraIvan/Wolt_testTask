// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import path from "node:path";
// import svgr from "vite-plugin-svgr";

// export default defineConfig({
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src/"),
//     },
//   },
//   plugins: [react(), svgr()],
//   // base: "/wolt-calculator",
// });
// import { defineConfig } from "vite";

// import react from "@vitejs/plugin-react-swc";

// import path from "path";

// export default defineConfig({
//   plugins: [react()],

//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src/"),
//     },
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        // svgr options
      },
    }),
  ],
});
