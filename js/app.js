// Importar las 4 funciones de conversión (convertirLongitud, convertirPeso, convertirTemperatura, convertirMoneda) desde sus archivos

import { convertirLongitud } from "./conversores/longitud.js";
import { convertirMoneda } from "./conversores/moneda.js";
import { convertirPeso } from "./conversores/peso.js";
import { convertirTemperatura } from "./conversores/temperatura.js";

// Detectar qué pestaña está activa (longitud, peso, temperatura o moneda)

const inputValor = document.getElementById("valor-input");
const selectOrigen = document.getElementById("unidad-origen");
const selectDestino = document.getElementById("unidad-destino");
const botonConvertir = document.getElementById("btn-convertir");
const botonIntercambiar = document.getElementById("btn-intercambiar");
const resultadoTexto = document.getElementById("resultado-texto");
const tituloConversor = document.getElementById("titulo-conversor");
const listaHistorial = document.getElementById("lista-historial");

// Llenar dinámicamente los <select> con las unidades correspondientes a esa pestaña

const configuraciones = {
  longitud: {
    funcion: convertirLongitud,
    unidades: ["metro", "kilometro", "milla", "pie"],
    titulo: "Conversor de Longitud",
  },
  peso: {
    funcion: convertirPeso,
    unidades: ["gramo", "kilogramo", "libra"],
    titulo: "conversor de Peso",
  },
  temperatura: {
    funcion: convertirTemperatura,
    unidades: ["celsius", "fahrenheit", "kelvin"],
    titulo: "Conversor de Temperatura",
  },
  moneda: {
    funcion: convertirMoneda,
    unidades: ["USD", "EUR", "ARS", "BRL", "GBP"],
    titulo: "Conversor de Moneda",
  },
};

// Escuchar el clic en "Convertir" y ejecutar la función correcta
function llenarSelects(unidades) {
  selectOrigen.innerHTML = "";
  selectDestino.innerHTML = "";

  unidades.forEach((unidad) => {
    const opcionOrigen = document.createElement("option");
    opcionOrigen.value = unidad;
    opcionOrigen.textContent = unidad;
    selectOrigen.appendChild(opcionOrigen);

    const opcionDestino = document.createElement("option");
    opcionDestino.value = unidad;
    opcionDestino.textContent = unidad;
    selectDestino.appendChild(opcionDestino);
  });
}

let tipoActivo = "longitud";

function cambiarPestana(tipo) {
  tipoActivo = tipo;

  botonesTab.forEach((boton) => {
    boton.classList.toggle("activa", boton.dataset.tipo === tipo);
  });

  const config = configuraciones[tipo];

  tituloConversor.textContent = config.titulo;
  llenarSelects(config.unidades);
}

const botonesTab = document.querySelectorAll(".tab");

botonesTab.forEach((boton) => {
  boton.addEventListener("click", () => {
    const tipo = boton.dataset.tipo;
    cambiarPestana(tipo);
  });
});

cambiarPestana(tipoActivo);

// Mostrar el resultado en el HTML
