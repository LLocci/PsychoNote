import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export const PSYCHONOTE_BASE_URL = "/psychonote";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: PSYCHONOTE_BASE_URL,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 4200,
    host: "localhost",
  },
});
