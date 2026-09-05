export const factoresPeso = {
  gramo: 1,
  kilogramo: 1000,
  libra: 453.59,
};

/**
 * Convierte un valor entre dos unidades de peso.
 * @param {number} valor - Cantidad a convertir.
 * @param {string} unidadOrigen - Unidad de origen (gramo, kilogramo, libra).
 * @param {string} unidadDestino - Unidad de destino (gramo, kilogramo, libra).
 * @returns {number} Valor convertido a la unidad de destino.
 */

export function convertirPeso(valor, unidadOrigen, unidadDestino) {
  const factorOrigen = factoresPeso[unidadOrigen];
  const factorDestino = factoresPeso[unidadDestino];
  if (factorOrigen === undefined || factorDestino === undefined) {
    throw new Error("Unidad de peso no válida");
  }
  const resultado = (valor * factorOrigen) / factorDestino;
  return resultado;
}
