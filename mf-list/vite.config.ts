import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "list",
      filename: "listRemoteEntry.js",
      exposes: {
        "./List": "./src/App.tsx",
      },
      shared: ["react", "react-dom"],
      remotes: {
        useNavigate: "http://localhost:5000/assets/remoteEntry.js",
      },
    }),
  ],
  build: {
    target: "chrome89",
  },
});
