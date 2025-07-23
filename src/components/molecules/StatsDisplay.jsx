import React from "react";
import { TrendingUp, DollarSign, Calendar, Percent } from "lucide-react";
import { ResultCard } from "./ResultCard";

const StatsDisplay = ({
  dailyRate,
  totalGain,
  finalAmount,
  days,
  className,
}) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercentage = (rate) => {
    return `${rate.toFixed(4)}%`;
  };

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}
    >
      <ResultCard
        title="Tasa Diaria"
        value={formatPercentage(dailyRate)}
        subtitle="Equivalente diaria"
        icon={Percent}
        variant="info"
      />
      <ResultCard
        title="Ganancia Total"
        value={formatCurrency(totalGain)}
        subtitle={`En ${days} días`}
        icon={TrendingUp}
        variant="success"
      />
      <ResultCard
        title="Saldo Final"
        value={formatCurrency(finalAmount)}
        subtitle="Monto + ganancia"
        icon={DollarSign}
        variant="default"
      />
      <ResultCard
        title="Período"
        value={`${days} días`}
        subtitle="Tiempo de inversión"
        icon={Calendar}
        variant="warning"
      />
    </div>
  );
};

export { StatsDisplay };
