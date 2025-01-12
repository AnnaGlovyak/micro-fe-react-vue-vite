import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  server: {
    origin: "http://localhost:2000",
    port: 2000,
  },
  base: "http://localhost:2000",
  plugins: [
    vue(),
    federation({
      name: "taskForm",
      filename: "taskFormRemoteEntry.js",
      exposes: {
        "./TaskForm": "./src/bootstrap.js",
      },
    }),
  ],
  build: {
    target: "chrome89",
  },
});
