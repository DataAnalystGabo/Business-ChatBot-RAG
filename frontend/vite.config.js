import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@chat": "/src/components/chat",
      "@icons": "/src/assets/icons",
      "@styles": "/src/styles",
    },
  },
});
