import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  alias: {
    "@config": path.resolve(__dirname, "./src/config"),
    "@components": path.resolve(__dirname, "./src/components"),
    "@pages": path.resolve(__dirname, "./src/pages"),
    "@layouts": path.resolve(__dirname, "./src/layouts"),
    "@routes": path.resolve(__dirname, "./src/routes"),
    "@assets": path.resolve(__dirname, "./src/assets"),
  },
});
