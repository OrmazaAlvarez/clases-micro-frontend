import { registerApplication, start } from "single-spa";

registerApplication({
    name: "app-mf-javascript",
    app: window.appJavaScript,
    activeWhen: ["/facturacion"],
    customProps: {
        codigo: "001",
        name: "Botón javaScript",
    }
});

registerApplication({
    name: "app-mf-react",
    app: window.appReact,
    activeWhen: ["/Clientes"],
    customProps: {
        codigo: "002",
        nombre: "App MF React",
    }
});

start();