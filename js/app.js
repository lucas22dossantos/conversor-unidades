// Importar las 4 funciones de conversión (convertirLongitud, convertirPeso, convertirTemperatura, convertirMoneda) desde sus archivos

import { convertirLongitud } from "./conversores/longitud.js";
import { convertirMoneda } from "./conversores/moneda.js";
import { convertirPeso } from "./conversores/peso.js";
import { convertirTemperatura } from "./conversores/temperatura.js";

// Obtener referencias a los elementos de la interfaz

const inputValor = document.getElementById("valor-input");
const selectOrigen = document.getElementById("unidad-origen");
const selectDestino = document.getElementById("unidad-destino");
const botonConvertir = document.getElementById("btn-convertir");
const botonIntercambiar = document.getElementById("btn-intercambiar");
const resultadoTexto = document.getElementById("resultado-texto");
const tituloConversor = document.getElementById("titulo-conversor");
const listaHistorial = document.getElementById("lista-historial");

// Configurar la función y las unidades de cada tipo de conversión
const configuraciones = {
  longitud: {
    funcion: convertirLongitud,
    unidades: ["metro", "kilometro", "milla", "pie"],
    titulo: "Conversor de Longitud",
  },
  peso: {
    funcion: convertirPeso,
    unidades: ["gramo", "kilogramo", "libra"],
    titulo: "Conversor de Peso",
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

// Llenar dinámicamente los <select> con las unidades de la pestaña activa
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

// Escuchar el clic en las pestañas y cambiar el conversor activo
botonesTab.forEach((boton) => {
  boton.addEventListener("click", () => {
    const tipo = boton.dataset.tipo;
    cambiarPestana(tipo);
  });
});

// Convertir el valor usando la función de la pestaña activa
botonConvertir.addEventListener("click", async () => {
  resultadoTexto.textContent = "Convirtiendo...";

  const valor = parseFloat(inputValor.value);
  const origen = selectOrigen.value;
  const destino = selectDestino.value;

  const config = configuraciones[tipoActivo];

  try {
    const resultado = await config.funcion(valor, origen, destino);

    // Mostrar el resultado en el HTML
    resultadoTexto.textContent = resultado;

    guardarEnHistorial({
      valor: valor,
      origen: origen,
      destino: destino,
      resultado: resultado,
      tipo: tipoActivo,
      fecha: new Date(),
    });

    mostrarHistorial();
  } catch (error) {
    resultadoTexto.textContent = "Ocurrió un error al convertir.";
  }
});

// Intercambiar las unidades de origen y destino
botonIntercambiar.addEventListener("click", () => {
  [selectOrigen.value, selectDestino.value] = [
    selectDestino.value,
    selectOrigen.value,
  ];
});

function guardarEnHistorial(entrada) {
  const historialGuardado = localStorage.getItem("historial");
  const historial = historialGuardado ? JSON.parse(historialGuardado) : [];

  historial.unshift(entrada);

  localStorage.setItem("historial", JSON.stringify(historial));
}

function formatearTiempoTranscurrido(fecha) {
  const fechaReal = new Date(fecha);
  const ahora = new Date();
  const diferenciaMs = ahora - fechaReal;
  const diferenciaMinutos = Math.floor(diferenciaMs / 1000 / 60);
  const diferenciaHoras = Math.floor(diferenciaMinutos / 60);
  const diferenciaDias = Math.floor(diferenciaHoras / 24);

  if (diferenciaMinutos < 1) {
    return "Recién";
  } else if (diferenciaHoras < 1) {
    return `Hace ${diferenciaMinutos} min`;
  } else if (diferenciaDias < 1) {
    return `Hace ${diferenciaHoras} horas`;
  } else {
    return `Hace ${diferenciaDias} días`;
  }
}

const iconosPorTipo = {
  longitud: "ruler",
  peso: "weight",
  temperatura: "thermometer",
  moneda: "dollar-sign",
};

function crearItemHistorial(entrada) {
  const li = document.createElement("li");

  const divIcono = document.createElement("div");
  divIcono.className = "historial-icono";
  divIcono.innerHTML = `<i data-lucide="${iconosPorTipo[entrada.tipo]}"></i>`;

  const divTexto = document.createElement("div");
  divTexto.className = "historial-texto";

  const textoPrincipal = document.createElement("p");
  textoPrincipal.textContent = `${entrada.valor} ${entrada.origen} → ${entrada.destino}`;

  const textoSecundario = document.createElement("p");
  textoSecundario.textContent = formatearTiempoTranscurrido(entrada.fecha);

  divTexto.appendChild(textoPrincipal);
  divTexto.appendChild(textoSecundario);

  li.appendChild(divIcono);
  li.appendChild(divTexto);

  return li;
}

function mostrarHistorial() {
  const historialGuardado = localStorage.getItem("historial");
  const historial = historialGuardado ? JSON.parse(historialGuardado) : [];

  listaHistorial.innerHTML = "";

  historial.forEach((entrada) => {
    const li = crearItemHistorial(entrada);
    listaHistorial.appendChild(li);
  });
  lucide.createIcons();
}

cambiarPestana(tipoActivo);
mostrarHistorial();
