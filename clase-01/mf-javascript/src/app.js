import { registerApplication, start } from "single-spa";

const app = {

  //inicio de la app

  async bootstrap(props){
    console.log("Inico de la app",props);
  },

  // Función llamada al montar la aplicación
  async mount(props) {
    console.log("App-montada:", props);

    // Obtener el elemento HTML con el id "app"
    const contenedor = document.getElementById("app");

    // Crear un botón y configurar su contenido
    const boton = document.createElement("button");
    boton.textContent = `Guardar ${props.name}`;

    // Agregar el botón al contenedor de la aplicación
    contenedor.appendChild(boton);
  },

  // Función llamada al desmontar la aplicación
  async unmount(props) {
    console.log("App-desmontado", props);

    // Obtener el elemento HTML con el id "app"
    const contenedor = document.getElementById("app");

    // Limpiar el contenido del contenedor al desmontar la aplicación
    contenedor.innerHTML = "";
  }
};

registerApplication({
    name: "app-mf-javascript",
    app,
    activeWhen: ["/"],
    customProps: {
        codigo: "001",
        nome: "Botón javaScript",
    }
});

start();