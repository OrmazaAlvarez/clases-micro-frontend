import React from "react";
import ReactDOMClient from "react-dom/client";
import singleSpaReact from "single-spa-react";
import { registerApplication, start } from "single-spa";
import Root from "./root.jsx";

const app = singleSpaReact({
    React,
    ReactDOMClient,
    rootComponent: Root,
    errorBoundary(err, info, props) {
        return "Error en la aplicación";
    },
    domElementGetter() {
        return document.getElementById("app");
    },
});

registerApplication({
    name: "app-mf-react",
    app,
    activeWhen: ["/"],
    customProps: {
        codigo: "002",
        nombre: "App MF React",
    }
});

start();