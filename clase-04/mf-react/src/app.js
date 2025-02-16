import React from "react";
import ReactDOMClient from "react-dom/client";
import singleSpaReact, { SingleSpaContext } from "single-spa-react";
import Root from "./root.jsx";

const app = singleSpaReact({
    React,
    ReactDOMClient,
    rootComponent: Root,
    errorBoundary(err, info, props) {
        return "Error en la aplicación";
    },
});

export const { bootstrap, mount, unmount } = app;