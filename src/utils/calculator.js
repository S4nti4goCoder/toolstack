/**
 * Calcula la tasa de interés diaria equivalente a partir de una tasa efectiva anual
 * @param {number} annualRate - Tasa efectiva anual (ej: 9.25 para 9.25%)
 * @returns {number} - Tasa diaria equivalente
 */
export const calculateDailyRate = (annualRate) => {
  const annualRateDecimal = annualRate / 100;
  const dailyRate = (Math.pow(1 + annualRateDecimal, 1 / 365) - 1) * 100;
  return dailyRate;
};

/**
 * Calcula el interés compuesto
 * @param {number} principal - Monto inicial
 * @param {number} annualRate - Tasa efectiva anual (%)
 * @param {number} days - Número de días
 * @returns {object} - Objeto con todos los resultados del cálculo
 */
export const calculateCompoundInterest = (principal, annualRate, days) => {
  const annualRateDecimal = annualRate / 100;
  const dailyRate = calculateDailyRate(annualRate);
  const dailyRateDecimal = dailyRate / 100;

  // Fórmula de interés compuesto: A = P(1 + r)^t
  const finalAmount = principal * Math.pow(1 + dailyRateDecimal, days);
  const totalGain = finalAmount - principal;

  return {
    dailyRate: dailyRate,
    totalGain: totalGain,
    finalAmount: finalAmount,
    principal: principal,
    days: days,
    annualRate: annualRate,
  };
};

/**
 * Formatea un número como moneda colombiana
 * @param {number} amount - Cantidad a formatear
 * @returns {string} - Cantidad formateada
 */
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

/**
 * Formatea un porcentaje
 * @param {number} rate - Tasa a formatear
 * @param {number} decimals - Número de decimales (default: 4)
 * @returns {string} - Porcentaje formateado
 */
export const formatPercentage = (rate, decimals = 4) => {
  return `${rate.toFixed(decimals)}%`;
};
