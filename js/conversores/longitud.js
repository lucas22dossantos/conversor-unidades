export const factoresLongitud = {
  metro: 1,
  kilometro: 1000,
  milla: 1609.34,
  pie: 0.3048,
};

/**
 * Convierte un valor entre dos unidades de longitud.
 * @param {number} valor - Cantidad a convertir.
 * @param {string} unidadOrigen - Unidad de origen (metro, kilometro, milla, pie).
 * @param {string} unidadDestino - Unidad de destino (metro, kilometro, milla, pie).
 * @returns {number} Valor convertido a la unidad de destino.
 */
export function convertirLongitud(valor, unidadOrigen, unidadDestino) {
  const factorOrigen = factoresLongitud[unidadOrigen];
  const factorDestino = factoresLongitud[unidadDestino];
  if (factorOrigen === undefined || factorDestino === undefined) {
    throw new Error("Unidad de longitud no válida");
  }
  const resultado = (valor * factorOrigen) / factorDestino;
  return resultado;
}
