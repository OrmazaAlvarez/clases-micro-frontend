import layout from "../public/layout.html";

import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

const routes = constructRoutes(layout);
const applications = constructApplications({
  routes,
  async loadApp({ name }) {
    if (window[name]) {
      return window[name];
    } else {
        throw new Error(`Aplicación no encontrada: ${name}`);
    }
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
/*
registerApplication({
    name: "app-mf-javascript",
    app: window.appJavaScript,
    activeWhen: ["/"],
    customProps: {
        codigo: "001",
        name: "Botón javaScript",
    }
});

registerApplication({
    name: "app-mf-react",
    app: window.appReact,
    activeWhen: ["/"],
    customProps: {
        codigo: "002",
        nombre: "App MF React",
    }
});
*/
start();