import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_API_KEY' : JSON.stringify(process.env.VITE_API_KEY), // Definisikan variabel API_KEY
    'process.env.VITE_BASE_URL': JSON.stringify(process.env.VITE_BASE_URL), // Definisikan variabel BASE_URL
  },
  server: {
    port: 3000,
  },
});
