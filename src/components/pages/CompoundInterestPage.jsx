import React from "react";
import { CompoundInterestCalculator } from "@/components/organisms/CompoundInterestCalculator";
import { AppLayout } from "@/components/templates/AppLayout";

const CompoundInterestPage = () => {
  return (
    <AppLayout
      title="Calculadora de Interés Compuesto - ToolStack"
      description="Calcula la rentabilidad diaria de tus inversiones basada en tasa efectiva anual. Herramienta gratuita de interés compuesto."
    >
      <CompoundInterestCalculator />
    </AppLayout>
  );
};

export { CompoundInterestPage };
