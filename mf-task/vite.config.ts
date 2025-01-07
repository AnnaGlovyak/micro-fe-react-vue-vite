import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { federation } from "@module-federation/vite";

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
      // name: "vite_provider",
      // manifest: true,
      // remotes: {
      //   esm_remote: {
      //     type: "module",
      //     name: "esm_remote",
      //     entry: "https://[...]/remoteEntry.js",
      //   },
      //   var_remote: "var_remote@https://[...]/remoteEntry.js",
      // },
      name: "taskForm",
      filename: "taskFormRemoteEntry.js",
      exposes: {
        "./taskForm": "./src/App.vue",
      },
      shared: ["vue"],
      // shared: ['react', 'react-dom', 'zustand'],
    }),
  ],
  build: {
    target: "chrome89",
  },
});
