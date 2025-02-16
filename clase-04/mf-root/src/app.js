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
    try {
      return await System.import(name);
    } catch (error) {
      console.error('Error al cargar el mf', error);
    }
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);

layoutEngine.activate();
start();