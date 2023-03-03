import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // "@config": path.resolve(__dirname, "./src/config"),
      "@": path.resolve(__dirname, "./src/"),
      pages: `${(path.resolve(__dirname), "./src/pages")}`,
      components: `${(path.resolve(__dirname), "./src/components")}`,
      // "@components": path.resolve(__dirname, "./src/components"),
      // "@pages": path.resolve(__dirname, "./src/pages"),
      // "@layouts": path.resolve(__dirname, "./src/layouts"),
      // "@routes": path.resolve(__dirname, "./src/routes"),
      // "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
  plugins: [react()],
});
