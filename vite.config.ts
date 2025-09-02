import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve ,dirname} from "path";
// import { componentTagger } from "lovable-tagger";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url as string));

export default defineConfig(() => ({
  server: {
    host: "::",
    port: 3000,
    strictPort: false,
  },
  plugins: [
    react(),
    // Add other plugins here if needed, e.g.:
    // mode === "development" ? someDevPlugin() : null
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
}));
 