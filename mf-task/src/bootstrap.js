import { createApp } from "vue";
import App from "./App.vue";

const mount = (el, hostNavigation) => {
  const app = createApp(App);
  app.provide("navigate", hostNavigation);
  app.mount(el);
};

if (import.meta.env.DEV) {
  const devRoot = document.querySelector("#vue-dev-app");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
