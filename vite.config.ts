/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // @ts-ignore
      "@": path.resolve(__dirname, "src"),
    },
  },
});
