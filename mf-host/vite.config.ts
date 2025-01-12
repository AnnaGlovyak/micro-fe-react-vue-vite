import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    federation({
      name: "host",
      remotes: {
        taskForm: "http://localhost:2000/assets/taskFormRemoteEntry.js",
        list: "http://localhost:4000/assets/listRemoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
    TanStackRouterVite(),
    react(),
  ],
  build: {
    target: "chrome89",
  },
});
