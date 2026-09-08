/**
 * Convierte un valor entre dos monedas usando tasas de cambio actualizadas.
 * @param {number} valor - Cantidad a convertir.
 * @param {string} monedaOrigen - Código de la moneda de origen (ej: "USD").
 * @param {string} monedaDestino - Código de la moneda de destino (ej: "EUR").
 * @returns {Promise<number>} Valor convertido a la moneda de destino.
 */

export async function convertirMoneda(valor, monedaOrigen, monedaDestino) {
  try {
    const urlMoneda = `https://api.frankfurter.app/latest?from=${monedaOrigen}&to=${monedaDestino}`;

    // 1. Hacer el fetch a la API de Frankfurter
    const response = await fetch(urlMoneda);

    // 2. Convertir la respuesta a JSON
    const data = await response.json();

    // 3. Sacar la tasa de cambio del JSON
    const tasa = data.rates[monedaDestino];

    // 4. Calcular el resultado (valor * tasa)
    const resultado = valor * tasa;

    // 5. Devolver el resultado
    return resultado;
  } catch (error) {
    console.log(error);
    throw new Error("No se pudo obtener la tasa de cambio");
  }
}
