/**
 * Convierte un valor entre dos unidades de temperatura.
 * @param {number} valor - Cantidad a convertir.
 * @param {string} unidadOrigen - Unidad de origen (celsius, fahrenheit, kelvin).
 * @param {string} unidadDestino - Unidad de destino (celsius, fahrenheit, kelvin).
 * @returns {number} Valor convertido a la unidad de destino.
 */

export function convertirTemperatura(valor, unidadOrigen, unidadDestino) {
  let valorEnCelsius;

  if (unidadOrigen === "celsius") {
    valorEnCelsius = valor;
  } else if (unidadOrigen === "fahrenheit") {
    valorEnCelsius = ((valor - 32) * 5) / 9;
  } else if (unidadOrigen === "kelvin") {
    valorEnCelsius = valor - 273.15;
  } else {
    throw new Error("Unidad de temperatura no válida");
  }

  let resultado;

  if (unidadDestino === "celsius") {
    resultado = valorEnCelsius;
  } else if (unidadDestino === "fahrenheit") {
    resultado = (valorEnCelsius * 9) / 5 + 32;
  } else if (unidadDestino === "kelvin") {
    resultado = valorEnCelsius + 273.15;
  } else {
    throw new Error("Unidad de temperatura no válida");
  }

  return resultado;
}
