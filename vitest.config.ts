/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      // @ts-ignore
      "@": path.resolve(__dirname, "src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.ts",
    include: ["src/**/*.test.tsx", "src/**/*.test.ts"],
  },
});
